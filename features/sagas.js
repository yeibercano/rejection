import { put, call, takeEvery } from 'redux-saga/effects';

//actions - action creators
const ADD_QUESTION = 'ADD_QUESTION', FETCHED_QUESTIONS = 'FETCHED_QUESTIONS', LOAD_STATE = 'LOAD_STATE';
const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
const fetchedQuestions = questions => ({ type: FETCHED_QUESTIONS, payload: questions });

//worker saga addQuestionAsync
export function* addQuestionAsync(action) {
  try {
    const parsedAsks = JSON.parse(localStorage.getItem('asks'));
    const newAsks = [...parsedAsks, action.payload];
    localStorage.setItem('asks', JSON.stringify(newAsks));
    yield put(fetchedQuestions(newAsks));
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
