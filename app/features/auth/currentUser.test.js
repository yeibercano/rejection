import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import CurrentUser from './currentUser.js';

const render = reactDom.renderToStaticMarkup;

test('CurrentUser component - ul', assert => {
  const msg = 'should render ul element';
  const el = <CurrentUser />

  const $ = dom.load(render(el));

  const actual = $('ul').length;
  const expected = 1;

  assert.same(actual, expected, msg);
  assert.end();

});

test('CurrentUser component - .currentUser', assert => {
  const msg = 'should render aside .currentUser element';
  const el = <CurrentUser />
  const $ = dom.load(render(el));

  const actual = $('aside.currentUser').length;
  const expected = 1;

  assert.same(actual, expected, msg);
  assert.end();

});
