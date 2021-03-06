import entriesSagas from './features/entries/entries_sagas';
import authSaga from './features/auth/auth_signin_saga';

// entry point to all sagas -- combine sagas type
export const rootSaga = function* rootSaga() {
  yield [entriesSagas(), authSaga()];
};
