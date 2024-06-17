import { legacy_createStore } from 'redux';
import { init, reducer } from './reducer';

export const store = legacy_createStore(reducer, init);
