import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import userReducer, { userLoggedIn } from './auth_reducer';
const defaultState = {
  user: {}
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
    const action = userLoggedIn();
    const expected = { user: {}};
    const actual = userReducer(expectedState(), action);

    assert.same(expected, actual, msg);
    assert.end();
  });

});
