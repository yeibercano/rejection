import { put, call, takeEvery, take } from 'redux-saga/effects';
import { userLoggedIn, userLogginRequested } from './auth_reducer';
import { authUser, auth, googleAuthProvider } from '../../storage/firebase';

//effects
export const setToken = ({
  uid = '',
  displayName = '',
  email = ''
} = {}) => {
  localStorage.setItem('uid', uid);
  return {
    uid,
    displayName,
    email
  }
};

//worker saga - signInUserAsync
export function* signInUserAsync() {
  try {
    const userAuth = yield call(authUser, auth, googleAuthProvider);
    const user = userAuth ? userAuth.user.user : {};
    yield call(setToken, user);
    yield put(userLoggedIn(user));

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
