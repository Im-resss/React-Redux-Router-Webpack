import {createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from './modules/index.js';
const middleware = applyMiddleware(thunk);
const Sstore = createStore(
  rootReducer,
  compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export default Sstore ;