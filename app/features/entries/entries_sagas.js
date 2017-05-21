import { put, call, takeEvery, select } from 'redux-saga/effects';
import { selectQuestions, addQuestion, fetchedQuestions, addedQuestion, loadState } from './entries_reducer';
import { database } from '../../storage/firebase';

//declarative effects
export const getQuestionFromLocalStorage = () => database.ref().once('value', s => s.val() );

//worker/task saga addQuestionAsync
export function* addQuestionToStorage() {
  try {
    const stateQuestions = yield select(selectQuestions);
    yield call(setAksInLocalStorage, stateQuestions);
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
export function* fetchQuestionsAsync({payload}) {
  try {
    const result = yield put(fetchedQuestions(payload));
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
