import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../features/reducers';
import { checkSetKeys, localStorageDefaults } from '../utilities';
import { store } from '../utilities';

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
