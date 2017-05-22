import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Signin from './signin.js';

const render = reactDom.renderToStaticMarkup;

test('Signin component', assert => {
  const msg = 'should render a button with a .signin class';
  const el = <Signin />
  const $ = dom.load(render(el));

  const actual = $('.signin').length;
  const expected = 1;

  assert.same(actual, expected, msg);
  assert.end();

});

test('Signin component', assert => {
  const msg = 'should render Sign In text inside of .signin class';
  const el = <Signin />
  const $ = dom.load(render(el));

  const actual = $('.signin').html();
  const expected = 'Sign In';

  assert.same(actual, expected, msg);
  assert.end();
});
