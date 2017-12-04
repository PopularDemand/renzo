import { signUp, signOut } from '../../lib/users/api';

export const AUTH_TYPES = {
  SIGN_UP_REQUEST: 'AUTH/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'AUTH/SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'AUTH/SIGN_UP_FAILURE',
  SIGN_OUT_REQUEST: 'AUTH/SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS: 'AUTH/SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE: 'AUTH/SIGN_OUT_FAILURE',
};

/* Sign Up Actions */
export function authSignUp(userParams) {
  return async function(dispatch) {
    dispatch(authSignUpRequest());
    function onSuccess(user) {
      dispatch(authSignUpSuccess(user));
      return Promise.resolve(user);
    }
    function onError(error) {
      dispatch(authSignUpFailure(error.message));
      return Promise.resolve(error);
    }

    try {
      const user = await signUp(userParams);
      if (user.error) {
        // TODO: change server to return more than string
        // or make standard function to handle res/errors
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
  error
});

/* Sign Out Actions */
export function authSignOut() {
  return async function(dispatch) {
    dispatch(authSignOutRequest());

    function onSuccess(payload) {
      return Promise.resolve(
        dispatch(authSignOutSuccess())
      );
    }
    function onError(error) {
      return Promise.resolve(
        dispatch(authSignOutFailure(error.message))
      );
    }

    try {
      const payload = await signOut();
      if (payload.error) {
        // TODO: change server to return more than string
        // or make standard function to handle res/errors
        // from this server
        return onError(new Error(payload.error));
      }
      return onSuccess();
    } catch (error) {
      return onError(error);
    }
  }
}

export const authSignOutRequest = () => ({
  type: AUTH_TYPES.SIGN_OUT_REQUEST
});

export const authSignOutSuccess = () => ({
  type: AUTH_TYPES.SIGN_OUT_SUCCESS
});

export const authSignOutFailure = (error) => ({
  type: AUTH_TYPES.SIGN_OUT_FAILURE,
  error
});
