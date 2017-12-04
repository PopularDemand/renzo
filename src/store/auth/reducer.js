import { omit } from 'lodash';
import { AUTH_TYPES } from './actions';

const initialState = {
  username: null,
  email: null,
  user_id: null,
  isLoading: false
};

export default function(state, action) {
  if (!state) return initialState;

  switch (action.type) {

    // SIGN UP
    case AUTH_TYPES.SIGN_UP_REQUEST:
      return {
        ...initialState,
        ...state,
        isLoading: true
      };

    case AUTH_TYPES.SIGN_UP_SUCCESS:
      return {
        ...initialState,
        ...state,
        ...omit(action.body.user, ['password', 'password_confirmation']),
        isLoading: false
      };

    case AUTH_TYPES.SIGN_UP_FAILURE:
      return {
        ...initialState,
        error: action.error,
        isLoading: false
      };

    // SIGN OUT
    case AUTH_TYPES.SIGN_OUT_REQUEST:
      return {
        ...initialState,
        ...state,
        isLoading: true
      };

    case AUTH_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...initialState
      };

    case AUTH_TYPES.SIGN_OUT_FAILURE:
      return {
        ...initialState,
        ...state,
        error: action.error,
        isLoading: false
      };

    default:
      return { ...initialState, ...state };
  }
}