import { createStore } from 'redux';
import { numberReducer } from './NumberRedux';

export const store = createStore(numberReducer);