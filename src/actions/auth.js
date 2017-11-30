import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAIL } from 'constants/actionTypes';
import { login } from 'lib/userService';

const authLoading = () => ({ type: AUTH_LOADING });
const authSuccess = () => ({ type: AUTH_SUCCESS });
const authFail = payload => ({ type: AUTH_FAIL, payload });

export const authenticateUser = () => async dispatchEvent => {
  dispatchEvent(authLoading());
  try {
    const res = await login();
    dispatchEvent(authSuccess());
  } catch (e) {
    dispatchEvent(authFail(e));
  }
};
