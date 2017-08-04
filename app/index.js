import React from 'react';
import { store, loadState } from './utilities';
import { Provider } from 'react-redux';
import Home from './home';

export default class Index extends React.Component {
  componentDidMount() {
    loadState();
  }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
