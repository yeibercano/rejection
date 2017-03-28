export const currentScore = () => {
  return dispatch => {
      const score = localStorage.getItem('score');
      dispatch({ type: 'CURRENT_SCORE', payload: score });
  }
}
