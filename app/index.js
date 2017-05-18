import React from 'react';
import { checkSetKeys, localStorageDefaults, store, loadStateFromLocalStorage } from './utilities';
import { Provider } from 'react-redux';

import Home from './home'

export default class Index extends React.Component {
  componentDidMount() {
    checkSetKeys(localStorageDefaults);
    loadStateFromLocalStorage();
  }

  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}
