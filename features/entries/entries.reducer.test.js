import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import { store } from '../../utilities'
import reducer, { getScore, selectQuestions } from './entries_reducer.js';

// DEFAULT STATE
const defaultState = { questions: [] };

// GET EXPECTED STATE
const getExpectedState = ( props = {} ) => Object.assign({}, defaultState, props);

//ACTIONS
const ADD_QUESTION = 'ADD_QUESTION', FETCHED_QUESTIONS = 'FETCHED_QUESTIONS', LOAD_STATE = 'LOAD_STATE', ADDED_QUESTION  = 'ADDED_QUESTION';
// ACTIONS CREATORS
const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
const fetchedQuestions = questions => ({ type: FETCHED_QUESTIONS, payload: questions });

test('Entries Reducer', nest => {
  nest.test('- default state', assert => {
    const msg = 'should render default state';
    const actual = reducer();
    const expected = getExpectedState();

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test(' - returns current score', assert => {
    const msg = 'should return currentScore';
    const state = reducer();

    const actual = getScore(state);
    const expected = 0;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- adds an entry', assert => {
    const msg = 'should add an entry';
    const state = reducer( undefined, addQuestion({ status: 'ACCEPT', ask: 'would you donate your salary'}) );

    const actual = selectQuestions(state)[0];
    const expected = { status: 'ACCEPT', ask: 'would you donate your salary'}

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- updates score by 1', assert => {
    const msg = 'should add 1 to score';
    const state = reducer(defaultState, addQuestion({ status: 'ACCEPT'}) );

    const actual = getScore(state);
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- updates score by 10', assert => {
    const msg = 'should add 10 to score';
    const state = reducer(defaultState, addQuestion({ status: 'REJECT'}) );

    const actual = getScore(state);
    const expected = 10;

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- fetches all questions', assert => {
    const msg = 'should return all questions';
    const action = fetchedQuestions([{ status: 'REJECT'}, { status: 'ACCEPT'}]);

    const actual = reducer(undefined, action ).questions;
    const expected = [{ status: 'REJECT'}, { status: 'ACCEPT'}]

    assert.same(actual, expected, msg);
    assert.end();
  });
});
