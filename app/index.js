import React from 'react';
import { store, loadState } from './utilities';
import { Provider } from 'react-redux';
import { database } from './storage/firebase';
import Home from './home'

export default class Index extends React.Component {
  componentDidMount() {
    database.ref('users').on('value', data => loadState(data.val()) )
  }

  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}
