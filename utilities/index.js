import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../app/reducers';
import rootSaga from '../app/sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware,logger)));
sagaMiddleware.run(rootSaga);

export const localStorageDefaults = {
  asks: []
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

// local storage state
const LOAD_STATE = 'LOAD_STATE';
export const loadStateFromLocalStorage = () => store.dispatch({type:LOAD_STATE});
