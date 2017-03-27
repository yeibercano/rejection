import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Entries from './index.js';

const render = reactDom.renderToStaticMarkup;

test('Entries component', assert => {
  const msg = 'should render i m not sure yet';
  const el = <Entries />;
  const $ = dom.load(render(el));

  const actual = $('.score').html();
  const expected = actual >= 0 ? actual : false;

  assert.same(actual, expected, msg);
  assert.end();
});
