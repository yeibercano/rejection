import { put, call, takeEvery, select, take } from 'redux-saga/effects';
import { addQuestion } from './entries_reducer';
import { database } from '../../storage/firebase';
import { eventChannel } from 'redux-saga';

//declarative effects
const userAsks = 'users/userId/asks';
export const addAskToUserStorage = ask => database.ref(userAsks).push(ask);

const userAsksEventChannel = () => {
  return database.ref(userAsks).on('value', snapshot => {
    return snapshot.val();
  });
};
export const updatedChannelAsks = userAsksEventChannel();

//worker/task saga addQuestionAsync
export function* addQuestionToStorage({ payload } = {}) {
  try {
    yield put(addedQuestion(payload));
    yield call(addAskToUserStorage, payload);
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
    const lastAdded = yield take(updatedChannelAsks);
    yield put(addQuestion(lastAdded));
  } catch (e) {
    console.log(e);
  }
}
//watcher saga - fetchedQuestionsAsync
function* watchUpdateQuestions() {
  yield takeEvery('LOAD_STATE', fetchQuestionsAsync);
}

// entry point to all sagas combine sagas type
export default function* rootEntriesSaga() {
  yield [watchAddQuestion(), watchUpdateQuestions()];
}
