class MoviesApi {  
  static getAllMovies() {
    return fetch('http://localhost:8080/src/mockData/movies.json').then(res => res.text())
    .then(res => {
      try {
        return JSON.parse(res);
      } catch(err) {
        // handle error
      }
    });
      }

}

export default MoviesApi;  