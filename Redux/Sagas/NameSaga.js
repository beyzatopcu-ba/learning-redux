import { takeEvery, fork, select, put } from 'redux-saga/effects';
import { changeName, CHANGE_NAME, CHANGE_NAME_FOR_SAGA } from '../NameRedux';

function* workerChangeName(action) {
    console.log('Worker sagaaaaa');

    // Global state'ten data okuyalım
    const nameInRedux = yield select(globalState => {
        console.log('GLOBAL STATE', globalState);
        return globalState.nameState.name;
    })

    console.log('NameState\'teki name', nameInRedux);

    // Gelen action nesnesindeki datayı inceleyelim
    console.log(action.payload);
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