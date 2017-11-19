import { signUp } from '../../lib/users/api';

export const AUTH_TYPES = {
  SIGN_UP_REQUEST: 'AUTH/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'AUTH/SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'AUTH/SIGN_UP_FAILURE'
};

/* Sign Up Actions */
export function authSignUp(userParams) {
  return async function(dispatch) {
    dispatch(authSignUpRequest());
    function onSuccess(user) {
      dispatch(authSignUpSuccess(user));
      return user;
    }
    function onError(error) {
      dispatch(authSignUpFailure(error));
      return error;
    }

    try {
      const user = await signUp(userParams);
      if (user.error) {
        // TODO: change server to return more than string
        // or make standard funciton to handle res/errors
        // from this server
        return onError(new Error(user.error));
      }
      return onSuccess(user);
    } catch (error) {
      return onError(error);
    }
  }
}

export const authSignUpRequest = () => ({
  type: AUTH_TYPES.SIGN_UP_REQUEST
});

export const authSignUpSuccess = (user) => ({
  type: AUTH_TYPES.SIGN_UP_SUCCESS,
  body: user
});

export const authSignUpFailure = (error) => ({
  type: AUTH_TYPES.SIGN_UP_FAILURE,
  body: error
});
