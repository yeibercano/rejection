import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';
import cuid from 'cuid';

import { store } from '../../utilities'
import reducer, { addQuestion, fetchedQuestions, getScore, selectQuestions } from './entries_reducer.js';

// default state
const defaultState = {
  questions: []
};

//accept and reject entries
const entry = status => ({ status, ask: 'would you donate your salary', askee: 'me', timeStamp: Date.now(), id: cuid() })

// expected state
const getExpectedState = ( props = {} ) => Object.assign({}, defaultState, props);

test('Entries Reducer', nest => {
  nest.test('- default state', assert => {
    const msg = 'should render default state';
    const actual = reducer();
    const expected = { questions: [] };

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test(' - returns current score', assert => {
    const msg = 'should return currentScore';

    const actual = getScore({ asks: defaultState });
    const expected = 0;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- addQuestion Action Creator', assert => {
    const msg = 'should return an object with: status, id, ask, askee and timeStamp';
    const action = addQuestion({
      status: 'ACCEPT',
      ask: 'would you donate your salary',
      askee: 'me',
      id: cuid(),
      timeStamp: Date.now()
    });

    const actual = reducer(undefined, action)
    const expected = getExpectedState({
      questions: [
        { status: 'ACCEPT',
          ask: 'would you donate your salary',
          askee: 'me',
          id: action.payload.id,
          timeStamp: action.payload.timeStamp
        }
      ]
    });

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- updates score by 1', assert => {
    const msg = 'should add 1 to score';
    const action = addQuestion({ status: 'ACCEPT', ask: 'would you donate your salary' });
    const state = getExpectedState({ asks: { questions: [action.payload] } });

    const actual = getScore(state);
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- updates score by 10', assert => {
    const msg = 'should add 10 to score';
    const action = addQuestion({ status: 'REJECT', ask: 'would you donate your salary' });
    const state = getExpectedState({ asks: { questions: [action.payload] } });

    const actual = getScore(state);
    const expected = 10;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- fetches all questions', assert => {
    const msg = 'should return all questions';
    const action = fetchedQuestions([{ status: 'REJECT'}, { status: 'ACCEPT'}]);

    const actual = getExpectedState({ asks: { questions: action.payload } }).asks.questions;
    const expected = [{ status: 'REJECT'}, { status: 'ACCEPT'}]

    assert.same(actual, expected, msg);
    assert.end();
  });
});
