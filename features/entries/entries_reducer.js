const ACCEPT = 'ACCEPT',
      REJECT = 'REJECT';

// reducers
const defaultState = {
  entries:[],
  currentScore: null
}

export const entries = (state = defaultState, action = {}) => {
	const { type, payload } = action;
	switch (type) {
    case ACCEPT:
    case REJECT:
      return {
        ...state,
        entries: [
          ...state.entries,
          payload
        ],
      }
    default: return state
  }
};

// action creators
// (data: d) => actionObject: { type: String, payload: Any }
export const acceptEntry = entry => ({ type: ACCEPT, payload: entry });
export const rejectEntry = entry => ({ type: REJECT, payload: entry });

// selectors
// (appState) => dataToSelect: Any
const getSlice = state => state.entries;

export const selectEntries = state => getSlice(state).entries;
/*
globalState = {
  entries: {
    entries: [],
    currentScore
  },
  user,
  history
  ...
}
*/
