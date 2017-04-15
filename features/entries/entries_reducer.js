// constants
const ADD_QUESTION  = 'ADD_QUESTION';

const defaultState = {
  questions:[]
}

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
export const acceptEntry = question => ({ type: ACCEPT, payload: question });
export const rejectEntry = question => ({ type: REJECT, payload: question });

// selectors
// asks state
const getSlice = state => state.asks;
// questions
export const selectQuestions = state => getSlice(state).questions;
//current score
export const currentScore = state => selectQuestions(state).reduce((curr, acc) => curr.status === 'ACCEPT' ? accu + 1 : accu + 10, 0);
