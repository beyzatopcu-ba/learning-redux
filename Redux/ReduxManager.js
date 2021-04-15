import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './Sagas/RootSaga';

import { numberReducer } from './NumberRedux';
import { nameReducer } from './NameRedux';
import { listReducer } from './ListRedux';
import { userReducer } from './UserRedux';
import { effectsReducer } from './EffectsRedux';

const rootReducer = combineReducers({
    numberState: numberReducer,
    nameState: nameReducer,
    shoppingList: listReducer,
    user: userReducer,
    effects: effectsReducer,
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