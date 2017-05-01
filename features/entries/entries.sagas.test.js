import test from 'tape';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import { selectQuestions } from './entries_reducer';

// sagas and helpers/services for sagas
import { addQuestionToStorage, fetchQuestionsAsync, getQuestionFromLocalStorage } from './entries_sagas';

// actions
const ADD_QUESTION = 'ADD_QUESTION', FETCHED_QUESTIONS = 'FETCHED_QUESTIONS', LOAD_STATE = 'LOAD_STATE', ADDED_QUESTION  = 'ADDED_QUESTION';
// action creators
const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
const fetchedQuestions = questions => ({ type: FETCHED_QUESTIONS, payload: questions });
const addedQuestion = () => ({ type: ADDED_QUESTION });

test('Call fetchQuestionsAsync Saga', nest => {
  const generator = fetchQuestionsAsync();

  nest.test('  - get entries from local storage ', assert => {
    const msg = 'should get entries from local storage';

    const actual = generator.next().value;
    const expected = call(getQuestionFromLocalStorage)

    assert.same(actual, expected, msg);
    assert.end();
  });

});
