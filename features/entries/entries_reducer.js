// constants
const ADD_QUESTION  = 'ADD_QUESTION';

const defaultState = {
  questions:[]
};

// reducer
export default (state = defaultState, action = {}) => {
	const { type, payload } = action;
	switch (type) {
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

const currentScoreReducer = (acc, cur) => cur.status === 'ACCEPT' ? acc + 1: acc + 10;
export const currentScore = state => selectQuestions(state).reduce(currentScoreReducer, 0);
