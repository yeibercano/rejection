const defaultState = {
  questions:[]
};

// reducer
export default (state = defaultState, action = {}) => {
	const { type, payload } = action;
	switch (type) {
    case FETCHED_QUESTIONS:
    return {
      ...state,
      questions: payload
    }
    case ADD_QUESTION:
    return {
      ...state,
      questions: state.questions.concat([payload])
    }
    default: return state;
  }
};

// actions
const ADD_QUESTION = 'ADD_QUESTION', FETCHED_QUESTIONS = 'FETCHED_QUESTIONS',
      LOAD_STATE = 'LOAD_STATE', ADDED_QUESTION  = 'ADDED_QUESTION';

// action creators
export const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
export const fetchedQuestions = questions => ({ type: FETCHED_QUESTIONS, payload: questions });
export const addedQuestion = () => ({ type: ADDED_QUESTION });
export const loadState = () => ({ type: LOAD_STATE });

// selectors
export const getSlice = state => state.asks;
export const selectQuestions = state => getSlice(state).questions;

export const currentScoreReducer = (acc, cur) => {
  if (cur.status === 'ACCEPT') {
    return acc + 1;
  } else if (cur.status === 'REJECT') {
    return acc + 10;
  }
}

export const getScore = state => getSlice(state).questions.reduce(currentScoreReducer, 0);
