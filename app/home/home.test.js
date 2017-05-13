import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Home from './index.js';
import { Provider } from 'react-redux';
import { store } from '../utilities'

const render = reactDom.renderToStaticMarkup;

test('Home component title', assert => {
  const msg = 'should render the title';
  const el = <Provider store={store}><Home /></Provider>;
  const $ = dom.load(render(el));

  const actual = $('.title').html();
  const expected = 'Rejection';

  assert.same(actual, expected, msg);
  assert.end();
});
