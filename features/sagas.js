import { put, call, takeEvery } from 'redux-saga/effects';
import { selectQuestions } from './entries/entries_reducer';
import { store } from '../utilities';

//actions - action creators
const ADD_QUESTION = 'ADD_QUESTION', FETCHED_QUESTIONS = 'FETCHED_QUESTIONS', LOAD_STATE = 'LOAD_STATE', SAVED_QUESTION = 'SAVED_QUESTION';
const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
const fetchedQuestions = questions => ({ type: FETCHED_QUESTIONS, payload: questions });
const savedQuestion = () => ({ type: SAVED_QUESTION });

//worker saga addQuestionAsync
export function* addQuestionAsync() {
  try {
    const newAsks = yield selectQuestions(store.getState());
    localStorage.setItem('asks', JSON.stringify(newAsks));
    yield put(savedQuestion());
  } catch (e) {
    console.log(e);
  }
}
//watcher saga - addQuestionAsync
export function* watchAddQuestion() {
  yield takeEvery(ADD_QUESTION, addQuestionAsync);
}
//worker saga fetchedQuestionsAsync
export function* fetchedQuestionsAsync() {
  try {
    const parsedAsks =  yield JSON.parse(localStorage.getItem('asks'));
    yield put(fetchedQuestions(parsedAsks));
  } catch (e) {
    console.log(e);
  }
}
//watcher saga - fetchedQuestionsAsync
export function* watchUpdateQuestions() {
  yield takeEvery(LOAD_STATE, fetchedQuestionsAsync);
}
//entry poin to all sagas // combine sagas type
export default function* rootSaga() {
  yield [
    watchAddQuestion(),
    watchUpdateQuestions(),
  ]
}
