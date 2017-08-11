import MoviesApi from '../api/movieAPI.js';
import * as types from './actionTypes.js'; 


export function loadMoviesSuccess(movies) {  
  return {type: types.LOAD_MOVIES_SUCCESS, movies};
}

export function loadMovies () {

    return function(dispatch) { 
        return MoviesApi.getAllMovies().then(movies=> {
            dispatch(loadMoviesSuccess(movies));
        }).catch(error=> {
            throw(error);
        });


    };
}
