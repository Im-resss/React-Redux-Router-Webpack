class detailsApi {  
  static getAllDetails() {
    return fetch('https://reactapp-90828.firebaseio.com/moviesDetails').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default detailsApi;  