import { createStore } from 'redux'
import { DefaultState } from './defaultState';

export const store = createStore(
    function reducer(state = DefaultState, action) {
        return state;
    }
)