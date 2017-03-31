export const accept = (entry) => {
  return dispatch => {
    const getScore = Number(localStorage.getItem('score'));
    const currentScore = getScore + 1;
    const currentEntry = {...entry, timestamp: new Date().getTime()}

    dispatch({ type: 'ACCEPT', payload: currentEntry })
    dispatch({ type: 'UPDATE_SCORE', payload: currentScore })
    localStorage.setItem('score', currentScore);
  }
}

export const reject = (entry) => {
  return dispatch => {
    const getScore = Number(localStorage.getItem('score'));
    const currentScore = getScore + 10;
    const currentEntry = {...entry, timestamp: new Date().getTime()}

    dispatch({ type: 'REJECT', payload: currentEntry })
    dispatch({ type: 'UPDATE_SCORE', payload: currentScore })
    localStorage.setItem('score', currentScore);
  }
}
