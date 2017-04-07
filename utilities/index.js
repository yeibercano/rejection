import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../features/reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
export const store = createStoreWithMiddleware(reducers);

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
