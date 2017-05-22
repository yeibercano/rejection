import { put, call, takeEvery, select, take } from 'redux-saga/effects';
import { selectQuestions, addQuestion, fetchedQuestions, addedQuestion, loadState } from './entries_reducer';
import { database } from '../../storage/firebase';
import { eventChannel } from 'redux-saga';

//declarative effects
const userAsks = 'users/userId/asks'
export const addAskToUserStorage = ask => database.ref(userAsks).push(ask);
const userAsksEventChannel = () => {
  return eventChannel( emit => database.ref(userAsks).on('child_added', data => emit(data.val()) )  )
}
export const updatedChannelAsks = userAsksEventChannel();

//worker/task saga addQuestionAsync
export function* addQuestionToStorage({ payload } = {}) {
  try {
    const recentlyAdded = yield call(addAskToUserStorage, payload);
    yield put(addedQuestion());
  } catch (e) {
    console.log(e);
  }
}

//watcher saga - addQuestionAsync
function* watchAddQuestion() {
  yield takeEvery(addQuestion().type, addQuestionToStorage);
}
//worker saga fetchedQuestionsAsync
export function* fetchQuestionsAsync() {
  try {


    while(true) {
      const lastAdded = yield take(updatedChannelAsks);
      yield put(fetchedQuestions(lastAdded));
    }

  } catch (e) {
    console.log(e);
  }
}
//watcher saga - fetchedQuestionsAsync
function* watchUpdateQuestions() {
  yield takeEvery(loadState().type, fetchQuestionsAsync);
}

// entry point to all sagas combine sagas type
export default function* rootEntriesSaga() {
  yield [
    watchAddQuestion(),
    watchUpdateQuestions(),
  ]
}
