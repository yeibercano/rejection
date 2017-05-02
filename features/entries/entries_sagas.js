import { put, call, takeEvery, select } from 'redux-saga/effects';
import { selectQuestions } from './entries_reducer';

//declarative effects
export const getQuestionFromLocalStorage = () => JSON.parse(localStorage.getItem('asks'));
export const setAksInLocalStorage = asks => { localStorage.setItem('asks', JSON.stringify(asks)) }

//actions - action creators
const ADD_QUESTION = 'ADD_QUESTION', FETCHED_QUESTIONS = 'FETCHED_QUESTIONS', LOAD_STATE = 'LOAD_STATE', ADDED_QUESTION  = 'ADDED_QUESTION';
const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
const fetchedQuestions = questions => ({ type: FETCHED_QUESTIONS, payload: questions });
const addedQuestion = () => ({ type: ADDED_QUESTION });

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
  yield takeEvery(ADD_QUESTION, addQuestionToStorage);
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
  yield takeEvery(LOAD_STATE, fetchQuestionsAsync);
}

// entry point to all sagas combine sagas type
export default function* rootEntriesSaga() {
  yield [
    watchAddQuestion(),
    watchUpdateQuestions(),
  ]
}
