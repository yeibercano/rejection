import React from 'react';
import { checkSetKeys, localStorageDefaults } from '../utilities';
import { Provider } from 'react-redux';
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
