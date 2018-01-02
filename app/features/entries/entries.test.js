import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Entries from './index.js';
import { Provider } from 'react-redux';
import { store } from '../../utilities';

const render = reactDom.renderToStaticMarkup;

test('Entries Component', nest => {
  nest.test('- inputs', assert => {
    const el = (
      <Provider store={store}>
        <Entries />
      </Provider>
    );
    const $ = dom.load(render(el));

    const msg = 'should render 4 input';
    const actual = $('input').length;
    const expected = 4;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- title', assert => {
    const el = (
      <Provider store={store}>
        <Entries />
      </Provider>
    );
    const $ = dom.load(render(el));
    const title = 'Rejection';

    const msg = 'should render a Rejection title';
    const actual = $('.title').html();
    const expected = title;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- paragraph', assert => {
    const el = (
      <Provider store={store}>
        <Entries />
      </Provider>
    );
    const $ = dom.load(render(el));

    const msg = 'should render a paragraph with content';
    const output = $('p.intro').children().length;

    const actual = output > 0;
    const expected = true;

    assert.same(actual, expected, msg);
    assert.end();
  });
});
