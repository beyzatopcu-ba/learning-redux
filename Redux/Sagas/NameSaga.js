import { takeEvery, fork, select, put } from 'redux-saga/effects';
import { changeName, CHANGE_NAME, CHANGE_NAME_FOR_SAGA } from '../NameRedux';

function* workerChangeName(action) {

    // Global state'ten data okuyalım
    const nameInRedux = yield select(globalState => {
        return globalState.nameState.name;
    })


    // Gelen action nesnesindeki datayı inceleyelim
    let nameFromAction = action.payload.name;

    // Redux state'i Store'a güncelletelim
    yield put(changeName(nameFromAction + ' :)'));
};


function* watchChangeName() {
    // İki parametre: 1. si hangi action tipi izlenecek
    // 2. si de bu action'a karşılık hangi worker saga çalışacak
    yield takeEvery(CHANGE_NAME_FOR_SAGA, workerChangeName);
};

const nameWatchers = [
    fork(watchChangeName),
];

export default nameWatchers;