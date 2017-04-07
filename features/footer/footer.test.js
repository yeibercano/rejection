import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Footer from './index.js';

const render = reactDom.renderToStaticMarkup;

test('Footer component number of links', assert => {
  const msg = 'should render 1 link';
  const el = <Footer />;
  const $ = dom.load(render(el));

  const actual = $('a').length;
  const expected = 1;

  assert.same(actual, expected, msg);
  assert.end();
});
