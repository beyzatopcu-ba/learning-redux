import { takeEvery, fork, select, put } from 'redux-saga/effects';
import { changeName, CHANGE_NAME } from '../NameRedux'

let loopNumber = 2;

function* workerChangeName() {
    console.log('Worker sagaaaaa');

    // Global state'ten data okuyalım
    const name = yield select(globalState => {
        console.log('GLOBAL STATE', globalState);
        return globalState.nameState.name;
    })

    console.log('NameState\'teki name', name);

    loopNumber--;
    if (loopNumber === 0) {
        return;
    }

    // Redux state'i Store'a güncelletelim
    yield put(changeName(name + ' :)'));
};


function* watchChangeName() {
    // İki parametre: 1. si hangi action tipi izlenecek
    // 2. si de bu action'a karşılık hangi worker saga çalışacak
    yield takeEvery(CHANGE_NAME, workerChangeName);
};

const nameWatchers = [
    fork(watchChangeName),
];

export default nameWatchers;