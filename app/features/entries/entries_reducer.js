import cuid from 'cuid';

const ADD_QUESTION = 'ADD_QUESTION';

const Accepted = 'Accepted';
const Rejected = 'Rejected';
const Unanswered = 'Unanswered';
const NOT_ANSWERED_TIME = 0;

// action creators
export const addQuestion = (
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

export const asksReducer = (state = defaultState, action = {}) => {
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

export const getScore = state =>
  getSlice(state).reduce(
    (accu, { status }) =>
      status === Accepted
        ? accu + 1
        : status === Rejected
          ? accu + 10
          : status === Unanswered ? accu + 0 : accu,
    0
  );
