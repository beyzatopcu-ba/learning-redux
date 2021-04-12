import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './Sagas/RootSaga';

import { numberReducer } from './NumberRedux';
import { nameReducer } from './NameRedux';
import { userReducer } from './UsernameRedux';
import { listReducer } from './ListRedux';

const rootReducer = combineReducers({
    numberState: numberReducer,
    nameState: nameReducer,
    userState: userReducer,
    shoppingList: listReducer,
});

// Saga middleware'imizi oluşturualım
const sagaMiddleware = createSagaMiddleware();


export default () => {
    // applyMiddleware ile saga middleware'ini redux'a iliştirelim
    let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    // Tüm saga sistemini ayağa kaldırıp, nöbetçi sagaların izlemeye başlamasını sağlayalım.
    sagaMiddleware.run(rootSaga);

    return { store };
}