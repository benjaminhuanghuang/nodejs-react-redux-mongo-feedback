import { combineReducers } from 'redux';
//
import AuthReducer from './AuthReducer';

// maps state and reducer
const reducers = combineReducers({
  auth: AuthReducer,
});

export default reducers; 