import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_GET_NOTI,
  AUTH_LOGOUT,
} from 'constants/actionTypes';
import { login, logout } from 'lib/userService';
import { getNoti } from 'lib/notificationService';

const authLoading = () => ({ type: AUTH_LOADING });
const authSuccess = payload => ({ type: AUTH_SUCCESS, payload });
const authFail = payload => ({ type: AUTH_FAIL, payload });
const authGetNoti = payload => ({ type: AUTH_GET_NOTI, payload });
const authLogout = () => ({ type: AUTH_LOGOUT });

export const authenticateUser = () => async dispatchEvent => {
  dispatchEvent(authLoading());
  try {
    const res = await login();
    dispatchEvent(authSuccess(res));
  } catch (e) {
    dispatchEvent(authFail(e));
  }
};

export const unauthenticateUser = () => async dispatchEvent => {
  try {
    await logout();
    dispatchEvent(authLogout());
  } catch (e) {
    console.log(e);
  }
};

export const authRefresh = actionToRetry => async dispatchEvent => {
  try {
    await login();
    dispatchEvent(actionToRetry());
  } catch (e) {
    throw e;
  }
};

export const authLoadNoti = () => async dispatchEvent => {
  try {
    dispatchEvent(authGetNoti(await getNoti()));
  } catch (e) {
    console.log(e);
  }
};
