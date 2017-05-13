import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Main from './index.js';
import { Provider } from 'react-redux';
import { store } from '../../utilities'

const render = reactDom.renderToStaticMarkup;

test('Main component', assert => {
  const msg = 'should render an aside';
  const el = <Provider store={store}><Main /></Provider>;
  const $ = dom.load(render(el));

  const actual = $('aside').length;
  const expected = 1;

  assert.same(actual, expected, msg);
  assert.end();
});
