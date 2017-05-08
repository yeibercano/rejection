import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import { store } from '../../utilities'
import reducer, { getScore } from './entries_reducer.js';

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
    const expected = { questions: [] };

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

  nest.test('- adds an entry', assert => {
    const msg = 'should add an entry';
    const output = reducer( undefined, addQuestion({}) );

    const actual = output.questions.length;
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- updates score by 1', assert => {
    const msg = 'should add 1 to score';
    const action = store.dispatch(addQuestion({ status: 'ACCEPT'}));

    const actual = getScore(store.getState());
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- updates score by 10', assert => {
    const msg = 'should add 10 to score';
    const action = store.dispatch(addQuestion({ status: 'REJECT'}));

    const actual = getScore(store.getState());
    const expected = 11;

    assert.same(actual, expected, msg);
    assert.end();
  });
});
