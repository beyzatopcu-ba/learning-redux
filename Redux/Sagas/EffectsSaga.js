import { takeEvery, fork, select, put, delay, call, race, all } from 'redux-saga/effects';
import { setTextAC, SET_TEXT_REQUEST } from '../EffectsRedux';

function* setTextAfterDelay1() {
    yield delay(3000);
    yield put(setTextAC('1. fonksiyon çalıştı'));
}

function* setTextAfterDelay2() {
    yield delay(5000);
    yield put(setTextAC('2. fonksiyon çalıştı'));
}

function* workerSetText(action) {

    // Delay effect'i
    // Bekletir
    /*
    yield delay(3000);

    yield put(setTextAC('geç yazdırıldım'));
    */

    // Delay 2. kullanım
    /*
    const text = yield delay(3000, 'delay içine verildim');

    yield put(setTextAC(text));
    */


    // 3 saniye sonra '1. fonksiyon çalıştı',
    // ondan 5 saniye sonra da '2. fonksiyon çalıştı' yazacak.
    /*
    yield call(setTextAfterDelay1);
    yield call(setTextAfterDelay2);
    */

    // 3 saniye sonra '1. fonksiyon çalıştı',
    // ondan 2 saniye sonra da '2. fonksiyon çalıştı' yazacak.
    /*
    yield all([
        call(setTextAfterDelay1),
        call(setTextAfterDelay2),
    ]);
    */


    // race kullanımı
    
    yield race({
        one: call(setTextAfterDelay1),
        two: call(setTextAfterDelay2),
    })
    
};


function* watchSetTextRequest() {
    // İki parametre: 1. si hangi action tipi izlenecek
    // 2. si de bu action'a karşılık hangi worker saga çalışacak
    //yield takeEvery(SET_TEXT_REQUEST, workerSetText);

    while(true) {
        const action = yield take(SET_TEXT_REQUEST);
        yield fork(call(workerSetText, action));
    }
};

const effectsSaga = [
    fork(watchSetTextRequest),
];

export default effectsSaga;