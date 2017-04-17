import { put, call, takeEvery } from 'redux-saga/effects';

//actions
const ADD_QUESTION = 'ADD_QUESTION', NEW_STATE = 'NEW_STATE', LOAD_STATE = 'LOAD_STATE';
const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
const updateQuestions = questions => ({ type: NEW_STATE, payload: questions });


//worker saga
export function* addQuestionAsync(action) {
  try {
    const parsedAsks = JSON.parse(localStorage.getItem('asks'));
    const newAsks = [...parsedAsks, action.payload];
    localStorage.setItem('asks', JSON.stringify(newAsks));
    yield put(updateQuestions(newAsks));
  } catch (e) {
    console.log(e);
  }
}
//watcher saga - AddQuestion
export function* watchAddQuestion() {
  yield takeEvery(ADD_QUESTION, addQuestionAsync);
}

//worker saga
export function* updateQuestionsAsync() {
  try {
    const parsedAsks =  yield JSON.parse(localStorage.getItem('asks'));
    yield put(updateQuestions(parsedAsks));
  } catch (e) {
    console.log(e);
  }
}
//watcher saga - AddQuestion
export function* watchUpdateQuestions() {
  yield takeEvery(LOAD_STATE, updateQuestionsAsync);
}

//entry poin to all sagas // Ccombine sagas type
export default function* rootSaga() {
  yield [
    watchAddQuestion(),
    watchUpdateQuestions(),
  ]
}
