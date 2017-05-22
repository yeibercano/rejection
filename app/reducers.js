import { combineReducers } from 'redux';
import asksReducer from './features/entries/entries_reducer';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  asksReducer,
  form
})

export default reducers;
