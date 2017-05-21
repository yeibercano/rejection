import { put, call, takeEvery, select, take } from 'redux-saga/effects';
import { selectQuestions, addQuestion, fetchedQuestions, addedQuestion, loadState } from './entries_reducer';
import { database } from '../../storage/firebase';
import { eventChannel } from 'redux-saga';

//declarative effects
export const getQuestionFromLocalStorage = () => database.ref().once('value', s => s.val() );
const usersEventChannel = () => {
  return eventChannel( emit => database.ref('users').on('value', data => emit(data.val()) )  )
}

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
    const updatedChannel = usersEventChannel();
    
    while(true) {
      const users = yield take(updatedChannel);
      yield put(fetchedQuestions(users));
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
