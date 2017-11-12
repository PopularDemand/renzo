import { omit } from 'lodash';

const AUTH_TYPES = {
  SIGN_UP: 'AUTH_SIGN_UP_SUCCESS'
};

const initialState = {
  username: '',
  email: ''
};

export default function(state, action) {
  if (!state) return initialState;

  switch (action.type) {
    case AUTH_TYPES.SIGN_UP_SUCCESS:
      return { ...initialState, ...omit(state, ['password', 'password_confirmation']) };
    default:
      return state;
  }
}