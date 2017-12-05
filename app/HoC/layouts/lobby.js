import React from 'react';
import { Header } from '../../header';
import { Home } from '../../home';
import { Footer } from '../../footer';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { store, loadState } from '../../utilities';

export const withMain = layout => Component => (
  <Provider store={store}>
    <Home>
      <Header />
      <Component />
      <Footer />
    </Home>
  </Provider>
);

withMain.propTypes = {
  lobby: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired
};
