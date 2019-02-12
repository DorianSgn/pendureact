import Immutable from 'seamless-immutable'

export const DECREMENT_ACTION = 'decrement';

const initialState = Immutable({
    nbChances: localStorage.nbChances
});

export function reducer(currentState = initialState, action) {

    switch(action.type) {
        case DECREMENT_ACTION:
            currentState = currentState.set('nbChances', currentState.nbChances -1)
            break;
    }

    return currentState;
}