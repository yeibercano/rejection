import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from '../features/reducers';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(reduxThunk,logger)(createStore);
const store = createStoreWithMiddleware(reducers);

import Home from '../features/home'

export default () => (
    <Provider store={store}>
      <Home/>
    </Provider>
)
