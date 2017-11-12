import { createStore, combineReducers } from 'redux';
import formReducer from './form/reducer';
import authReducer from './auth/reducer';

export const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer
});
export default createStore(rootReducer);
