
const defaultState = {
  user: {}
}

export default (state=defaultState, action={}) => {
  const { type, payload } = action;

  return state;
};
