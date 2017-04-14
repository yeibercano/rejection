const CURRENT_SCORE = 'CURRENT_SCORE';
const getCurrentScore = payload => ({ type: CURRENT_SCORE, payload });

export const currentScore = () => {
  return dispatch => {
    const getItem = Number(localStorage.getItem('score'));
      dispatch(getCurrentScore(getItem));
  }
}
