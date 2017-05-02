import test from 'tape';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import { selectQuestions } from './entries_reducer';

// sagas and helpers/services for sagas
import { addQuestionToStorage, fetchQuestionsAsync, getQuestionFromLocalStorage, setAksInLocalStorage } from './entries_sagas';

// actions
const ADD_QUESTION = 'ADD_QUESTION', FETCHED_QUESTIONS = 'FETCHED_QUESTIONS', LOAD_STATE = 'LOAD_STATE', ADDED_QUESTION  = 'ADDED_QUESTION';
// action creators
const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
const fetchedQuestions = questions => ({ type: FETCHED_QUESTIONS, payload: questions });
const addedQuestion = () => ({ type: ADDED_QUESTION });

// start testing
test('Call fetchQuestionsAsync Saga', nest => {
  const generator = fetchQuestionsAsync();

  nest.test('  - get entries from local storage ', assert => {
    const msg = 'should get entries from local storage';

    const actual = generator.next().value;
    const expected = call(getQuestionFromLocalStorage);

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- dispatches a fetchedQuestions', assert => {
    const msg = 'should dispatch a FETCHED_QUESTIONS action with entries ';

    const actual = generator.next().value;
    const expected = put(fetchedQuestions());

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- generator is DONE. It returns true and undefined', assert => {
    const msg = 'should return { done: true, value: undefined }';

    const actual = generator.next();
    const expected = { done: true, value: undefined };

    assert.same(actual, expected, msg);
    assert.end();
  });

});

test('Call addQuestionToStorage Saga', nest => {
  const generator = addQuestionToStorage();

  nest.test(' - select questions - select(selectQuestions) ', assert => {
    const msg = 'should get questions/entries from state';

    // once DB is connected, we'll connect to it and not from state
    const actual = generator.next().value;
    const expected = select(selectQuestions);

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- serializes questions', assert => {
    const msg = 'should call setAksInLocalStorage to serialize asks';

    const actual = generator.next().value;
    const expected = call(setAksInLocalStorage, undefined);

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- dispatches an addedQuestion action', assert => {
    const msg = 'should dispatch an ADDED_QUESTION action';

    const actual = generator.next().value;
    const expected = put(addedQuestion());

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test('- generator is DONE. It returns true and undefined', assert => {
    const msg = 'should return { done: true, value: undefined }';

    const actual = generator.next();
    const expected = { done: true, value: undefined };

    assert.same(actual, expected, msg);
    assert.end();
  });

});
