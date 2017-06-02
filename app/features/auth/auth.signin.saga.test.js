import test from 'tape';
import { put, call, takeEvery, take } from 'redux-saga/effects';
import { authUser, auth, googleAuthProvider } from '../../storage/firebase';

// sagas and helpers/services for sagas
import { signInUserAsync, setToken } from './auth_signin_saga';

test('Signin User Saga', nest => {
  const generator = signInUserAsync();

  nest.test(' - calls authUser saga  ', assert => {
    const msg = 'should call yield with the authUser';
    const actual = generator.next().value;
    const expected = call(authUser, auth, googleAuthProvider);

    assert.same(actual, expected, msg);
    assert.end();
  });

  nest.test(' - call setToken to place UID in local storage', assert => {
    const msg = 'should call yield with setToken';
    const actual = generator.next().value;
    const expected = call(setToken, {});

    assert.same(actual, expected, msg);
    assert.end();
  });

});
