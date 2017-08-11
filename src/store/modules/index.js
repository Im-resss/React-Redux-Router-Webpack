 import {combineReducers} from 'redux';
import movies from './moviesReducer.js';

const rootReducer = combineReducers({
    movies
})
export default rootReducer;