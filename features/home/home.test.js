import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Home from './index.js';

const render = reactDom.renderToStaticMarkup;

test('Home component title', assert => {
  const msg = 'should render the title';
  const el = <Home />;
  const $ = dom.load(render(el));

  const actual = $('.title').html();
  const expected = 'Rejection';

  assert.same(actual, expected, msg);
  assert.end();
});
