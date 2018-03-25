import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import formReducer from './form/reducer';
import authReducer from './auth/reducer';
import gameReducer from './game/reducer';

export const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  game: gameReducer
});
const loggerMiddleware = createLogger();

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
