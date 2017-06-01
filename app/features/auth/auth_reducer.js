
const defaultState = {
  user: {}
}

const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const userLoggedIn = (user={}) => ({type:USER_LOGGED_IN, payload: user});

export default (state=defaultState, action={}) => {
  const { type, payload } = action;
  switch(type) {
    case USER_LOGGED_IN:
    return {
      ...state,
      user: payload
    }
    default: return state;
  }
};
