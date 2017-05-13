import { combineReducers } from 'redux';
import asks from './features/entries/entries_reducer';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  asks,
  form
})

export default reducers;
