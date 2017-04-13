const ACCEPT = 'ACCEPT',
      REJECT = 'REJECT',
      CURRENT_SCORE = 'CURRENT_SCORE';

//actions
const acceptEntry = entry => ({ type: ACCEPT, payload: entry })
const rejectEntry = entry => ({ type: REJECT, payload: entry });

//action creators
export const accept = (entry) => {
  return dispatch => {
    const getScore = JSON.parse(localStorage.getItem('score'));
    const updatedScore = getScore + 1;
    // grab current entries -> []
    const entries = JSON.parse(localStorage.getItem('accept'));
    const currentEntry = {...entry, timestamp: Date.now()};
    const updatedEntries = [...entries, currentEntry];
    // sending on the dispatch to reducer
    dispatch(acceptEntry(currentEntry));
    // set it to localStorage /score and entries
    localStorage.setItem('score', JSON.stringify(updatedScore));
    localStorage.setItem('accept', JSON.stringify(updatedEntries));
  }
}
export const reject = (entry) => {
  return dispatch => {
    const getScore = JSON.parse(localStorage.getItem('score'));
    const updatedScore = getScore + 10;

    const currentEntry = {...entry, timestamp: Date.now()}
    const entries = JSON.parse(localStorage.getItem('reject'));
    const updatedEntries = [...entries, currentEntry];

    dispatch(rejectEntry(currentEntry));

    localStorage.setItem('score', JSON.stringify(updatedScore));
    localStorage.setItem('reject', JSON.stringify(updatedEntries));
  }
}

// reducers
const defaultState = {
  entries:[],
  currentScore: null
}

export function entries (state = defaultState, action = {}) {
	const { type, payload, currentScore } = action;
	switch (type) {
    case CURRENT_SCORE:
      return {
        ...state,
        currentScore: payload || state.currentScore || 0
        }
    case ACCEPT:
      return {
        ...state,
        entries: [
          ...state.entries,
          payload
        ],
        currentScore: state.currentScore + 1
      }
    case REJECT:
      return {
        ...state,
        entries: [
          ...state.entries,
          payload
        ],
        currentScore: state.currentScore + 10
      }
    default: return state
  }
}
