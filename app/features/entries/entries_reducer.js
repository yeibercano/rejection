import cuid from 'cuid';

// actions
const ADD_QUESTION = 'ADD_QUESTION', FETCHED_QUESTIONS = 'FETCHED_QUESTIONS',
LOAD_STATE = 'LOAD_STATE', ADDED_QUESTION  = 'ADDED_QUESTION';

// action creators
export const addQuestion = ({
  status = '',
  ask = '',
  askee = '',
  timeStamp = Date.now(),
  id = cuid()
} = {}) => ({
  type: ADD_QUESTION,
  payload: {
    status,
    ask,
    askee,
    timeStamp,
    id
  }
});
export const fetchedQuestions = (ask = {}) => ({
  type: FETCHED_QUESTIONS,
  payload: ask
});
export const addedQuestion = () => ({ type: ADDED_QUESTION });
export const loadState = () => ({ type: LOAD_STATE });

const defaultState = {
    asks: [
      {
        ask: '',
        askee: '',
        status: '',
        timestamp: ''
      }
    ]
};

// reducer
export default (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCHED_QUESTIONS:
    return {
      ...state, asks: state.asks.concat([payload])
    }
    default: return state;
  }
};

// selectors
export const getSlice = state => state.asksReducer;
export const selectQuestions = state => getSlice(state).asks;

export const currentScoreReducer = (acc, cur) => {
  if (cur.status === 'ACCEPT') {
    return acc + 1;
  } else if (cur.status === 'REJECT') {
    return acc + 10;
  }

  return acc + 0;
}

export const getScore = state => getSlice(state).asks.reduce(currentScoreReducer, 0);
