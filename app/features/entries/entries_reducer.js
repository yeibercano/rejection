import cuid from 'cuid';

const ADD_QUESTION = 'ADD_QUESTION';

const Accepted = 'Accepted';
const Rejected = 'Rejected';
const Unanswered = 'Unanswered';
const NOT_ANSWERED_TIME = 0;
const DEFAULT_ID = 0;

// action creators
const addQuestion = (
  {
    status = '',
    ask = '',
    askee = '',
    askedTime = Date.now(),
    answeredTime = NOT_ANSWERED_TIME,
    id = cuid()
  } = {}
) => ({
  type: ADD_QUESTION,
  payload: {
    status,
    ask,
    askee,
    askedTime,
    answeredTime,
    id
  }
});

const defaultState = [];

const reducer = (state = [], action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_QUESTION:
      return state.concat([payload]);
    default:
      return state;
  }
};

// selectors
export const getSlice = state => state.asksReducer;

const getScore = state =>
  getSlice(state).reduce(
    (accu, { status }) =>
      status === Accepted ? accu + 1 : status === Rejected ? accu + 10 : accu,
    0
  );
