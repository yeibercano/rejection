export const accept = () => {
  const setScore = localStorage.getItem('score') ?
                   localStorage.setItem('score', Number(localStorage.getItem('score')) + 1) :
                   localStorage.setItem('score', 1);
  const score = localStorage.getItem('score');

  return dispatch => {
    dispatch({ type: 'ACCEPT', payload: Number(score) })
  }
}

export const reject = () => {
  const setScore = localStorage.getItem('score') ?
                   localStorage.setItem('score', Number(localStorage.getItem('score')) + 10) :
                   localStorage.setItem('score', 10);
  const score = localStorage.getItem('score');

  return dispatch => {
    dispatch({ type: 'REJECT', payload: score })
  }
}
