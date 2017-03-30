import { combineReducers } from 'redux';
import { accept } from './entries/entry_accept_reducer';
import { reject } from './entries/entry_reject_reducer';
import { score } from './entries/entry_score_reducer';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  accept,
  reject,
  score,
  form
})

export default reducers;
