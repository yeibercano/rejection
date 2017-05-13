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
const generateEntry = status => ({
  status,
  ask: 'would you donate your salary?',
  askee: 'me',
  timeStamp: Date.now(),
  id: cuid()
});

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
    const msg = 'should return an array with an object: status, id, ask, askee and timeStamp';
    const action = addQuestion(generateEntry('ACCEPT'));

    const actual = reducer(undefined, action)
    const expected = getExpectedState({
      questions: [
        { status: 'ACCEPT',
          ask: 'would you donate your salary?',
          askee: 'me',
          id: action.payload.id,
          timeStamp: action.payload.timeStamp
        }
      ]
    });

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- fetchedQuestions Action Creator', assert => {
    const msg = 'should return an array of user-objects from storage';
    const action = fetchedQuestions([ generateEntry('ACCEPT') ]);

    const actual = reducer(undefined, action)
    const expected = getExpectedState({
      questions: [
        { status: 'ACCEPT',
          ask: 'would you donate your salary?',
          askee: 'me',
          id: action.payload[0].id,
          timeStamp: action.payload[0].timeStamp
        }
      ]
    });

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- updates score by 1', assert => {
    const msg = 'should add 1 to score';
    const action = addQuestion(generateEntry('ACCEPT'));
    const state = getExpectedState({ asks: { questions: [action.payload] } });

    const actual = getScore(state);
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- getScore selector with REJECT status', assert => {
    const msg = 'should return a score of 10';
    const action = addQuestion(generateEntry('REJECT'));;
    const state = getExpectedState({ asks: { questions: [action.payload] } });

    const actual = getScore(state);
    const expected = 10;

    assert.same(actual, expected, msg);
    assert.end();
  });
});
