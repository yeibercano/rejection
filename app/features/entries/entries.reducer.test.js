import test from 'tape';
import cuid from 'cuid';

import { asksReducer, addQuestion, getScore } from './entries_reducer.js';

// default state
const defaultState = [];

//accept and reject entries
const generateEntry = status => ({
  status,
  ask: 'would you donate your salary?',
  askee: 'me',
  timeStamp: Date.now(),
  id: cuid()
});

// expected state
const getExpectedState = (props = []) => [].concat(defaultState).concat(props);

test('Entries Reducer', nest => {
  nest.test('- default state', assert => {
    const msg = 'should render default state';
    const actual = asksReducer();
    const expected = getExpectedState();

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test(' - returns current score', assert => {
    const msg = 'should return currentScore';

    const actual = getScore({ asksReducer: defaultState });
    const expected = 0;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- fetchedQuestions Action Creator', assert => {
    const msg = 'should return an array of user-objects from storage';
    const action = generateEntry('ACCEPT');
    const actual = asksReducer(defaultState, action);
    const expected = getExpectedState([
      {
        ACCEPT: 'ACCEPT',
        ask: 'would you donate your salary?',
        askee: 'me',
        id: action.payload.id,
        timeStamp: action.payload.timeStamp
      }
    ]);

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- getScore selector with ACCEPT status', assert => {
    const msg = 'should return a score of 1';
    const action = addQuestion(generateEntry('ACCEPT'));
    const state = getExpectedState({ asksReducer: { asks: [action.payload] } });

    const actual = getScore(state);
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- getScore selector with REJECT status', assert => {
    const msg = 'should return a score of 10';
    const action = addQuestion(generateEntry('REJECT'));
    const state = getExpectedState({ asksReducer: { asks: [action.payload] } });

    const actual = getScore(state);
    const expected = 10;

    assert.same(actual, expected, msg);
    assert.end();
  });
});
