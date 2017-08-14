class MoviesApi {  
  static getAllMovies() {
    return fetch('http://localhost:8080/src/mockData/movies.json').then(response => {
  
      return response.text();
    }).catch(error => {
      return error;
    });
  }
 
}


export default MoviesApi;  