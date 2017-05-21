import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware,logger)));
sagaMiddleware.run(rootSaga);

const LOAD_STATE = 'LOAD_STATE';
export const loadState = () => store.dispatch({type:LOAD_STATE});
