import test from 'tape';
import { put, call, takeEvery, select, take } from 'redux-saga/effects';
import { selectQuestions, fetchedQuestions, addedQuestion, addQuestion } from './entries_reducer';

// sagas and helpers/services for sagas
import { addQuestionToStorage, fetchQuestionsAsync, addAskToUserStorage, updatedChannelAsks  } from './entries_sagas';

test('Call fetchQuestionsAsync Saga', nest => {
  const generator = fetchQuestionsAsync();

  nest.test('  - should receive any new asks added by user ', assert => {
    const msg = 'takes new asks added to updatedChannelAsks';

    const actual = generator.next().value;
    const expected = take(updatedChannelAsks);

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


  nest.test('- generator is remains active listening for asks added', assert => {
    const msg = 'should return an active listening take';

    const actual = generator.next();
    const expected = { done: false, value: take(updatedChannelAsks) };

    assert.same(actual, expected, msg);
    assert.end();
  });

});

test('Call addQuestionToStorage Saga', nest => {
  const generator = addQuestionToStorage();

  nest.test(' - call addAskToUserStorage to post on DB ', assert => {
    const msg = 'should call addAskToUserStorage, add ask to DB';

    // once DB is connected, we'll connect to it and not from state
    const actual = generator.next().value;
    const expected = call(addAskToUserStorage, undefined);

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
