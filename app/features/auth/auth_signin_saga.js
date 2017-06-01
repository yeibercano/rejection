import { put, call, takeEvery, take } from 'redux-saga/effects';
import { userLoggedIn, userLogginRequested } from './auth_reducer';
import { authUser, auth, googleAuthProvider } from '../../storage/firebase';

//worker saga - signInUserAsync
export function* signInUserAsync() {
  try {
    const loggedUser = yield call(authUser, auth, googleAuthProvider);
    yield put(userLoggedIn(loggedUser.user.user));

  } catch (e) {
    console.log('error -->', e);
  }
};

//watcher saga - for userLogginRequested actions
function* watchUserLogginRequested() {
  yield takeEvery(userLogginRequested().type, signInUserAsync);
}

// export all auth sagas
export default function* rootSignInUserSaga() {
  yield [
    watchUserLogginRequested()
  ]
};
