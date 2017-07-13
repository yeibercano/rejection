
const defaultState = {
  user: {
    email: '',
    displayName: '',
    uid: ''
  }
}

const USER_LOGGED_IN = 'USER_LOGGED_IN', USER_LOGGIN_REQUESTED = 'USER_LOGGIN_REQUESTED';
export const userLogginRequested = () => ({type: USER_LOGGIN_REQUESTED})
export const userLoggedIn = ({
  email = '',
  displayName = '',
  uid = ''
} = {}) => ({
  type: USER_LOGGED_IN,
  payload: {
    email,
    displayName,
    uid
  }
});

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

export const getUser = state => state.user.email.length > 1 ? state.user : undefined;
