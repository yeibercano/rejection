import { put, call, takeEvery, select } from 'redux-saga/effects';
import { selectQuestions } from './entries_reducer';

//actions - action creators
const ADD_QUESTION = 'ADD_QUESTION', FETCHED_QUESTIONS = 'FETCHED_QUESTIONS', LOAD_STATE = 'LOAD_STATE', ADDED_QUESTION  = 'ADDED_QUESTION';
const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
const fetchedQuestions = questions => ({ type: FETCHED_QUESTIONS, payload: questions });
const addedQuestion = () => ({ type: ADDED_QUESTION });

//worker/task saga addQuestionAsync
export function* addQuestionToStorage() {
  try {
    const stateQuestions = yield select(selectQuestions);
    const serializedQuestions = JSON.stringify(stateQuestions);``
    localStorage.setItem('asks', serializedQuestions);
    yield put(addedQuestion());
  } catch (e) {
    console.log(e);
  }
}

//watcher saga - addQuestionAsync
function* watchAddQuestion() {
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
function* watchUpdateQuestions() {
  yield takeEvery(LOAD_STATE, fetchQuestionsAsync);
}

// entry point to all sagas combine sagas type
export default function* rootEntriesSaga() {
  yield [
    watchAddQuestion(),
    watchUpdateQuestions(),
  ]
}
