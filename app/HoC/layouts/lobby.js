import React, { component } from 'react';
import { Header } from './header';
import { Home } from './header';
import { Footer } from './header';

export const withMain = lobby => Main => (
  <Home>
    <Header />
    <Main />
    <Footer />
  </Home>
);

withMain.propTypes = {
  lobby: PropTypes.string.isRequired
  Main: PropTypes.func.isRequired
};
