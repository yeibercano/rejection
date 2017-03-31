export const currentScore = () => {
  return dispatch => {
      const score = localStorage.getItem('score') ? localStorage.getItem('score') : 0 ;
      dispatch({ type: 'CURRENT_SCORE', payload: Number(score)  });
  }
}
