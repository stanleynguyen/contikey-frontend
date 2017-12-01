import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAIL } from 'constants/actionTypes';
import { login } from 'lib/userService';

const authLoading = () => ({ type: AUTH_LOADING });
const authSuccess = payload => ({ type: AUTH_SUCCESS, payload });
const authFail = payload => ({ type: AUTH_FAIL, payload });

export const authenticateUser = () => async dispatchEvent => {
  dispatchEvent(authLoading());
  try {
    const res = await login();
    console.log(res);
    dispatchEvent(authSuccess(res));
  } catch (e) {
    dispatchEvent(authFail(e));
  }
};
