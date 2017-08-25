import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form';
//
import AuthReducer from './AuthReducer';
import SurveysReducer from './SurveysReducer';

// maps state and reducer
const reducers = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  surveys: SurveysReducer
});

export default reducers; 