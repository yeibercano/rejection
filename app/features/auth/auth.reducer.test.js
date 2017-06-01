import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';
import cuid from 'cuid';

import userReducer, { userLoggedIn } from './auth_reducer';
const defaultState = {
  user: {}
}
const loggedInUser = {
  uid: cuid(),
  email: 'example@gmail.com',
  displayName:'example JS'
}

const expectedState = ( props={} ) => Object.assign({}, defaultState, props)

test('User Reducer', nest => {
  nest.test('- default state', assert => {
    const msg = 'should return default state';
    const expected = expectedState();
    const actual = userReducer();

    assert.same(expected, actual, msg);
    assert.end();
  });

  nest.test('- add logged in user to state', assert => {
    const msg = 'should return state with a logged in user';
    const action = userLoggedIn(loggedInUser);
    const expected = {
      user: {
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName
      }
    };
    const actual = userReducer(defaultState, action);

    assert.same(actual, expected, msg);
    assert.end();
  });

});
