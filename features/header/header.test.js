import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Header from './index.js';

const render = reactDom.renderToStaticMarkup;

test('Header component', assert => {
  const msg = 'should render Brand name';
  const el = <Header />;
  const $ = dom.load(render(el));

  const actual = $('a').html();
  const expected = 'Brand';

  assert.same(actual, expected, msg);
  assert.end();
});
