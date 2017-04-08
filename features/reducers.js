import { combineReducers } from 'redux';
import { entries } from './entries/entries_reducer';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  entries,
  form
})

export default reducers;
