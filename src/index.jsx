import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import configureStore from './store/configureStore.js';
import App from './components/App.js';
import routes from './routes.js'
import {loadMovies} from './actions/movieActions.js';
const store = configureStore();
store.dispatch= configureStore();
render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={App}>
       
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)