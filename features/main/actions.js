const CURRENT_SCORE = 'CURRENT_SCORE';

export const currentScore = () => {
  return dispatch => {
    const getItem = Number(localStorage.getItem('score'));
    console.log('getItem', getItem)
      dispatch({ type: CURRENT_SCORE, payload: getItem || 0 });
  }
}
