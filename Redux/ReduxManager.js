import { createStore, combineReducers } from 'redux';
import { numberReducer } from './NumberRedux';
import { nameReducer } from './NameRedux';
import { userReducer } from './UsernameRedux';

const rootReducer = combineReducers({
    numberState: numberReducer,
    nameState: nameReducer,
    userState: userReducer,
});

// Global state objemiz şuna benziyor
const state = {
    numberState: {
        number: 0,
    },
    nameState: {
        name: '',
    },
};

// createStore(numberReducer);
export const store = createStore(rootReducer);