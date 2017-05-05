import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import { store } from '../../utilities'
import reducer, { getScore } from './entries_reducer.js';

//DEFAULT STATE
const createState = ({ questions = [] } = {}) => ({ questions });

//ACTIONS
const ADD_QUESTION = 'ADD_QUESTION', FETCHED_QUESTIONS = 'FETCHED_QUESTIONS', LOAD_STATE = 'LOAD_STATE', ADDED_QUESTION  = 'ADDED_QUESTION';
// ACTIONS CREATORS
const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
const fetchedQuestions = questions => ({ type: FETCHED_QUESTIONS, payload: questions });
const addedQuestion = () => ({ type: ADDED_QUESTION });

test('Entries Reducer', nest => {
  nest.test('- default state', assert => {
    const msg = 'should render default state';
    const actual = reducer();
    const expected = createState();

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test(' - returns current score', assert => {
    const msg = 'should return currentScore';
    const actual = getScore(store.getState());
    const expected = 0;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- accept ask', assert => {
    const msg = 'should add an entry';
    const output = reducer( undefined, addQuestion({}) );

    const actual = output.questions.length;
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('update currentScore by 1', assert => {
    const msg = 'should add 1 to currentScore';
    const output = reducer(undefined, actions[0]);

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
