import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const LOAD_STATE = 'LOAD_STATE';
const USER_LOGGIN_REQUESTED = 'USER_LOGGIN_REQUESTED';

export const loadState = () => store.dispatch({ type: LOAD_STATE });
export const userLogginRequested = () =>
  store.dispatch({ type: USER_LOGGIN_REQUESTED });
