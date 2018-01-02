import React from 'react';
import { store, loadState } from './utilities';
import { Provider } from 'react-redux';

export const withStore = component => {
  return (
    <Provider store={store}>
      <component />
    </Provider>
  );
};
