class MoviesApi {  
  static getAllMovies() {
    return fetch('https://reactapp-90828.firebaseio.com/movies').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default MoviesApi;  