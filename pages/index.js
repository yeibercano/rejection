import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from '../features/reducers';
import { checkSetKeys, localStorageDefaults } from '../utilities'

const logger = createLogger();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk,logger)));

import Home from '../features/home'

export default class Index extends React.Component {
  componentDidMount() {
    checkSetKeys(localStorageDefaults);
  }

  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}
