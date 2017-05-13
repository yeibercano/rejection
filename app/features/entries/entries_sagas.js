import { put, call, takeEvery, select } from 'redux-saga/effects';
import { selectQuestions, addQuestion, fetchedQuestions, addedQuestion, loadState } from './entries_reducer';

//declarative effects
export const getQuestionFromLocalStorage = () => JSON.parse(localStorage.getItem('asks'));
export const setAksInLocalStorage = asks => { localStorage.setItem('asks', JSON.stringify(asks)) }

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
export function* fetchQuestionsAsync() {
  try {
    const parsedAsks =  yield call(getQuestionFromLocalStorage);
    const result = yield put(fetchedQuestions(parsedAsks));
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
