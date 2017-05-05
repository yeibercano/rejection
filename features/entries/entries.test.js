import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import Entries from './index.js';
import entries, { accept, reject, getScore } from './entries_reducer.js';
import { Provider } from 'react-redux';
import { store } from '../../utilities'

const render = reactDom.renderToStaticMarkup;

test('Entries Component', nest => {
  nest.test('- inputs', assert => {
    const el = <Provider store={store}><Entries /></Provider>;
    const $ = dom.load(render(el));

    const msg = 'should render 4 input';
    const actual = $('input').length;
    const expected = 4;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- title', assert => {
    const el = <Provider store={store}><Entries /></Provider>;
    const $ = dom.load(render(el));
    const title = 'Rejection';

    const msg = 'should render a Rejection title';
    const actual = $('.title').html();
    const expected = title;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- paragraph', assert => {
    const el = <Provider store={store}><Entries /></Provider>;
    const $ = dom.load(render(el));

    const msg = 'should render a paragraph with content';
    const output = $('p.intro').children().length;

    const actual = output > 0;
    const expected = true;

    assert.same(actual, expected, msg);
    assert.end();
  });

});

//DEFAULT STATE
const createState = ({ questions = [] } = {}) => ({ questions });

test('Entries Reducer', nest => {
  nest.test('- default state', assert => {
    const msg = 'should render default state';
    const actual = entries();
    const expected = createState();

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test(' - returns current score', assert => {
    const msg = 'should return currentScore';
    console.log('store', store)

    const actual = getScore(store.getState());
    const expected = 0;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- accept ask', assert => {
    const msg = 'should add an accepted entry';
    const output = entries(
      undefined,
      actions[0]
    );

    const actual = output.entries.length;
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('update currentScore by 1', assert => {
    const msg = 'should add 1 to currentScore';
    const output = entries(undefined, actions[0]);

    const previousState = entries();
    const actual = output.currentScore;
    const expected = previousState.currentScore + 1;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('reject ask', assert => {
    const msg = 'should add an rejected entry';
    const output = entries(undefined, actions[1]);

    const actual = output.entries.length;
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('update currentScore by 10', assert => {
    const msg = 'should add 10 to currentScore';
    const output = entries(undefined, actions[1]);

    const previousState = entries();
    const actual = output.currentScore;
    const expected = previousState.currentScore + 10;

    assert.same(actual, expected, msg);
    assert.end();
  });
});
