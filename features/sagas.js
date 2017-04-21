import { put, call, takeEvery } from 'redux-saga/effects';
import { selectQuestions } from './entries/entries_reducer';
import { store } from '../utilities';

//actions - action creators
const ADD_QUESTION = 'ADD_QUESTION', LOADED_STATE = 'LOADED_STATE', LOAD_STATE = 'LOAD_STATE', ADDED_QUESTION  = 'ADDED_QUESTION';
const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
const fetchedQuestions = questions => ({ type: LOADED_STATE, payload: questions });
const addedQuestion = () => ({ type: ADDED_QUESTION });

//worker saga addQuestionAsync
export function* addQuestionToStorage() {
  try {
    const newAsks = yield selectQuestions(store.getState());
    localStorage.setItem('asks', JSON.stringify(newAsks));
    yield put(addedQuestion());
  } catch (e) {
    console.log(e);
  }
}
//watcher saga - addQuestionAsync
export function* watchAddQuestion() {
  yield takeEvery(ADD_QUESTION, addQuestionToStorage);
}
//worker saga fetchedQuestionsAsync
export function* fetchQuestionsAsync() {
  try {
    const parsedAsks =  yield JSON.parse(localStorage.getItem('asks'));
    yield put(fetchedQuestions(parsedAsks));
  } catch (e) {
    console.log(e);
  }
}
//watcher saga - fetchedQuestionsAsync
export function* watchUpdateQuestions() {
  yield takeEvery(LOAD_STATE, fetchQuestionsAsync);
}
//entry poin to all sagas // combine sagas type
export default function* rootSaga() {
  yield [
    watchAddQuestion(),
    watchUpdateQuestions(),
  ]
}
