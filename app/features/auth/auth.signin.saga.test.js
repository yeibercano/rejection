import test from 'tape';
import { put, call, takeEvery, select, take } from 'redux-saga/effects';
import { userLoggedIn } from './auth_reducer';

// sagas and helpers/services for sagas
import { signInUserAsync, authUser  } from './auth_signin_saga';

test('Signin User Saga', nest => {
  const generator = signInUserAsync();

  nest.test(' - calls user saga  ', assert => {
    const msg = 'should call yield with the authUser';
    const actual = generator.next().value;
    const expected = call(authUser);

    assert.same(actual, expected, msg);
    assert.end();
  });

});
