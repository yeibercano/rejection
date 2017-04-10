import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from '../features/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk,logger)));

export const localStorageDefaults = {
  score: 0,
  accept: [],
  reject: []
}

export const checkSetKeys = function (defaults) {
  for(var key in defaults) {
    if (Array.isArray(defaults[key])) {
      if (localStorage.getItem(key) === null ) {
        localStorage.setItem(key, JSON.stringify(defaults[key]));
      }
    } else {
      if (localStorage.getItem(key) === null) {
        localStorage.setItem('score', 0 )
      }
    }
  }
}
