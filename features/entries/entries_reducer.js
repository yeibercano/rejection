// constants
const ADD_QUESTION = 'ADD_QUESTION', NEW_STATE = 'NEW_STATE';

const defaultState = {
  questions:[]
};

// reducer
export default (state = defaultState, action = {}) => {
	const { type, payload } = action;
	switch (type) {
    case NEW_STATE:
    return {
      ...state,
      questions: payload
    }
    case ADD_QUESTION:
    return {
      ...state,
      questions: [
        ...state.questions,
        payload
      ]
    }
    default: return state;
  }
};

// action creators
export const addQuestion = question => ({ type: ADD_QUESTION, payload: question });

// selectors
const getSlice = state => state.asks;

export const selectQuestions = state => getSlice(state).questions;

const currentScoreReducer = (acc, cur) => {
  if (cur.status === 'ACCEPT') {
    return acc + 1;
  } else if (cur.status === 'REJECT') {
    return acc + 10;
  }
}
export const currentScore = state => selectQuestions(state).reduce(currentScoreReducer, 0);
