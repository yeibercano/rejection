import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import {Entry} from './index.js';

const render = reactDom.renderToStaticMarkup;

test('Entry component', assert => {
  const el = <Entry />;
  const $ = dom.load(render(el));

  const msg = 'should render 2 input';
  const actual = $('input').length;
  const expected = 2;

  const msgButtons = 'should render 2 buttons';
  const actualButtons = $('button').length;
  const expectedButtons = 2;

  assert.same(actual, expected, msg);
  assert.same(actualButtons, expectedButtons, msgButtons);
  assert.end();
});
