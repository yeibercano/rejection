export const accept = (data) => {
  console.log('clicked on, ', data)
  return dispatch => {
    dispatch({ type: 'ACCEPT', payload: 1})
  }
}

export const reject = (data) => {
  return dispatch => {
    dispatch({ type: 'REJECT', payload: 10})
  }
}
