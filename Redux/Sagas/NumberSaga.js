import { takeEvery, select, put, fork } from 'redux-saga/effects';
import { INCREASE_NUMBER_REQUEST, INCREASE_NUMBER_SUCCESS } from '../NumberRedux';
import { numberSelector } from '../NumberRedux';

// Worker saga
// Sayıyı arttırmak için gerekli işlemleri yapacak
// ve arttırma action'ını dispatch edecek
function* workIncreaseNumber() {
    // Store'daki data 'select' ile çekilir
    let number = yield select(numberSelector);

    // Bu işçi saga, gerekli çalışmalarını yapar
    // Burada sayıyı 1 arttırıyor
    number++;

    // Çalışmaları başarılı olduğu için 
    // Success action nesnesi oluşturuyor ve datayı (number'ı)
    // payload'a iliştiriyor.
    const increaseNumberSuccessAction = {
        type: INCREASE_NUMBER_SUCCESS,
        payload: {
            number,
        }
    };

    // Az önce oluşturduğumuz action nesnesini dispatch ediyoruz
    // Dispatch için 'put' effect'i kullanılıyor.
    yield put(increaseNumberSuccessAction);
}

// Watcher saga
// Sayı arttırma isteklerini izleyecek, nöbetçi olacak
function* watchIncreaseNumber() {
    // takeEvery: istisnasız tüm INCREASE_NUMBER_REQUEST tipindeki
    // action'lar için işçi sagasını çalıştırır.
    yield takeEvery(INCREASE_NUMBER_REQUEST, workIncreaseNumber);
}

// Bu dosyadaki tüm watcher sagaları bu şekilde yazıyoruz.
const numberSagas = [
    fork(watchIncreaseNumber),
];

export default numberSagas;