import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

//actions
const ADD_QUESTION = 'ADD_QUESTION';

//worker saga
export function* addQuestionAsync(payload) {
  try {
    const parsedAsks = JSON.parse(localStorage.getItem('asks'));
    const newAsks = [...parsedAsks, payload];
    localStorage.setItem('asks', JSON.stringify(newAsks));
  } catch (e) {
    console.log(e);
  }
}
//watcher saga - AddQuestion
export function* watchAddQuestion() {
  yield takeEvery(ADD_QUESTION, addQuestionAsync);
}

//entry poin to all sagas // Ccombine sagas type
export default function* rootSaga() {
  yield [
    watchAddQuestion(),
  ]
}
