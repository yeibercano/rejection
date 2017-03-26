import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Score from './index.js';

const render = reactDom.renderToStaticMarkup;

test('Score component', assert => {
  const msg = 'should render a number >= 0';
  const el = <Score />;
  const $ = dom.load(render(el));

  const actual = $('.score').html();
  const expected = actual >= 0 ? actual : false;

  assert.same(actual, expected, msg);
  assert.end();
});
