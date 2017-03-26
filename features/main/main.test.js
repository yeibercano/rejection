import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Main from './index.js';

const render = reactDom.renderToStaticMarkup;

test('Main component', assert => {
  const msg = 'should render an aside an a section';
  const el = <Main />;
  const $ = dom.load(render(el));

  const actual = $('aside section').length;
  const expected = 2;

  assert.same(actual, expected, msg);
  assert.end();
});
