import { combineReducers } from 'redux';
import asks from './entries/entries_reducer';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  asks,
  form
})

export default reducers;
