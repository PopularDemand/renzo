import { omit } from 'lodash';
import { AUTH_TYPES } from './actions';

const initialState = {
  username: '',
  email: '',
  isLoading: false
};

export default function(state, action) {
  if (!state) return initialState;

  switch (action.type) {
    case AUTH_TYPES.SIGN_UP_SUCCESS:
      return {
        ...initialState,
        ...omit(action.body.user, ['password', 'password_confirmation']),
        isLoading: false
      };

    case AUTH_TYPES.SIGN_UP_REQUEST:
      return {
        ...initialState,
        isLoading: true
      };

    case AUTH_TYPES.SIGN_UP_FAILURE:
      return {
        ...initialState,
        error: action.error,
        isLoading: false
      };

    default:
      return { ...initialState, ...state };
  }
}