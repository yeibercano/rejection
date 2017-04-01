export const accept = (entry) => {
  return dispatch => {
    const getScore = Number(localStorage.getItem('score'));
    const updatedScore = getScore + 1;
    // grab current entries -> []
    const entries = localStorage.getItem('accept');
    const currentEntry = {...entry, timestamp: new Date().getTime()}
    const updatedEntries = [...entries, currentEntry];
    // sending on the dispatch to reducers
    dispatch({ type: 'ACCEPT', payload: updatedEntries })
    dispatch({ type: 'UPDATE_SCORE', payload: updatedScore })
    // set it to localStorage /score and entries
    localStorage.setItem('score', updatedScore);
    localStorage.setItem('accept', updatedEntries);
  }
}

export const reject = (entry) => {
  return dispatch => {
    const getScore = Number(localStorage.getItem('score'));
    const updatedScore = getScore + 10;

    const currentEntry = {...entry, timestamp: new Date().getTime()}
    const entries = localStorage.getItem('reject');
    const updatedEntries = [...entries, currentEntry];

    dispatch({ type: 'REJECT', payload: updatedEntries })
    dispatch({ type: 'UPDATE_SCORE', payload: updatedScore })

    localStorage.setItem('score', updatedScore);
    localStorage.setItem('reject', updatedEntries);
  }
}
