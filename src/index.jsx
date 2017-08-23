import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

import Sstore from './store/configureStore.js';
import { loadMovies } from './actions/movieActions.js';
import App from './App.js';


const store = Sstore;

store.dispatch(loadMovies());


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);