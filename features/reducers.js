import { combineReducers } from 'redux';
import { accept } from './entries/entry_accept_reducer';
import { reject } from './entries/entry_reject_reducer';

 const reducers = combineReducers({
 	accept,
  reject
 })

export default reducers;
