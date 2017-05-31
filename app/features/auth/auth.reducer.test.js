import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import userReducer from './auth_reducer';

const defaultState = () => ({ user: {}});
const expectedState = ( props={} ) => Object.assign({}, defaultState, props)

test('User Reducer', assert => {
  const msg = 'should return default state';
  const expected = defaultState();
  const actual = userReducer();

  assert.same(expected, actual, msg);
  assert.end();
});
