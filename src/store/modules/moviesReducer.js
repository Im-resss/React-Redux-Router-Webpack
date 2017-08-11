import * as types from '../../actions/actionTypes.js';
import initialState from './initialState.js';


export default function catReducer (state= initialState.movies, action) {

    switch(action.type) {


        case types.LOAD_CATS_SUCCESS:
        return action.cats

        default: 
        return state ;
    }

}