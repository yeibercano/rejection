const CURRENT_SCORE = 'CURRENT_SCORE';

export const currentScore = () => {
  return dispatch => {
    const getItem = Number(localStorage.getItem('score'));
      dispatch({ type: CURRENT_SCORE, payload: getItem });
  }
}
