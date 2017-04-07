import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Entries from './index.js';
import { Provider } from 'react-redux';
import { store } from '../../utilities'

const render = reactDom.renderToStaticMarkup;

test('Entries component', assert => {
  const el = <Provider store={store}><Entries /></Provider>;
  const $ = dom.load(render(el));

  const msg = 'should render 4 input';
  const actual = $('input').length;
  const expected = 4;

  assert.same(actual, expected, msg);
  assert.end();
});
