import {GET_CONVERGES} from './actions'

export const reducers = (state, action) => {
    switch (action.type) {
        case GET_CONVERGES:
            return {
                ...state,
                getConverges: action.payload
            };
        default: 
            return state;
    }
}