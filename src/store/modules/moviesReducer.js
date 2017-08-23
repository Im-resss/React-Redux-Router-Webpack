import * as types from '../../actions/actionTypes.js';
import initialState from './initialState.js';


export default function movieReducer (state= initialState.movies, action) {

    switch(action.type) {

        case types.LOAD_MOVIES_SUCCESS:
        return action.movies        
        default: 
        return state ;
    }

}