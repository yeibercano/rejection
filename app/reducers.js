import { combineReducers } from 'redux';
import asksReducer from './features/entries/entries_reducer';
import userReducer from './features/auth/auth_reducer';

import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  asksReducer,
  userReducer,
  form
})

export default reducers;
