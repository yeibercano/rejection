import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import { Provider } from 'react-redux';
import { store } from '../utilities';

import Header from './index.js';

const render = reactDom.renderToStaticMarkup;

test('Header component', assert => {
  const msg = 'should render Brand name';
  const el = (
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const $ = dom.load(render(el));

  const actual = $('a').html();
  const expected = 'Rejection';

  assert.same(actual, expected, msg);
  assert.end();
});
