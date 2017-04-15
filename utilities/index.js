import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../features/reducers';
import rootSaga from '../features/sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
      sagaMiddleware.run(rootSaga);
const logger = createLogger();
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware,logger)));

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
