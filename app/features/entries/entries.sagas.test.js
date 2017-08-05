import test from 'tape';
import { put, call, takeEvery, select, take } from 'redux-saga/effects';
import {
  selectQuestions,
  fetchedQuestions,
  addedQuestion,
  addQuestion
} from './entries_reducer';

// sagas and helpers/services for sagas
import {
  addQuestionToStorage,
  fetchQuestionsAsync,
  addAskToUserStorage,
  updatedChannelAsks
} from './entries_sagas';

// idea to prevent .next() .next() .nex() calls
const generatorStep = (generator, step, ...args) => {
  const iterator = generator(...args);
  let val;
  for (let i = 0; i < step; i++) {
    val = iterator.next();
  }
  return val;
};

test('FetchQuestionsAsync step 1', assert => {
  const msg = 'should receive any new asks added by user';

  const actual = generatorStep(fetchQuestionsAsync, 1).value;
  const expected = take(updatedChannelAsks);

  assert.same(actual, expected, msg);
  assert.end();
});

test('- FetchQuestionsAsync step 2', assert => {
  const msg = 'should dispatch a FETCHED_QUESTIONS action with entries ';

  const actual = generatorStep(fetchQuestionsAsync, 2).value;
  const expected = put(
    addQuestion({
      askedTime: actual.askedTime,
      id: actual.id
    })
  );
  assert.same(actual, expected, msg);
  assert.end();
});

// test('AddQuestionToStorage step 1 ', assert => {
//   const msg = 'should call addAskToUserStorage, add ask to DB';
//
//   // once DB is connected, we'll connect to it and not from state
//   const actual = generatorStep(addQuestionToStorage, 1).value;
//   const expected = call(addAskToUserStorage, undefined);
//
//   assert.same(actual, expected, msg);
//   assert.end();
// });
//
// test('- AddQuestionToStorage step 2', assert => {
//   const msg = 'should dispatch an ADDED_QUESTION action';
//
//   const actual = generatorStep(addQuestionToStorage, 2).value;
//   const expected = put(addedQuestion());
//
//   assert.same(actual, expected, msg);
//   assert.end();
// });
//
// test('- AddQuestionToStorage is DONE. It returns true and undefined', assert => {
//   const msg = 'should return { done: true, value: undefined }';
//
//   const actual = generatorStep(addQuestionToStorage, 3);
//   const expected = { done: true, value: undefined };
//
//   assert.same(actual, expected, msg);
//   assert.end();
// });
