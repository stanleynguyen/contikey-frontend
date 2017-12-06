import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_GET_NOTI,
  AUTH_LOGOUT,
  AUTH_MARK_NOTI,
  AUTH_FOLLOW_TAGS,
} from 'constants/actionTypes';
import { login, logout } from 'lib/userService';
import { getNoti, markNotiAsRead } from 'lib/notificationService';
import { followTags } from 'lib/tagService';

const authLoading = () => ({ type: AUTH_LOADING });
const authSuccess = payload => ({ type: AUTH_SUCCESS, payload });
const authFail = payload => ({ type: AUTH_FAIL, payload });
const authGetNoti = payload => ({ type: AUTH_GET_NOTI, payload });
const authLogout = () => ({ type: AUTH_LOGOUT });
const authMarkNoti = payload => ({ type: AUTH_MARK_NOTI, payload });
const authFolTags = () => ({ type: AUTH_FOLLOW_TAGS });

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

export const authMarkNotiAsRead = ({
  notification_id,
}) => async dispatchEvent => {
  if (!notification_id) return;
  try {
    await markNotiAsRead({ notification_id });
    dispatchEvent(authMarkNoti({ notification_id }));
  } catch (e) {
    console.log(e);
  }
};

export const authFollowTags = ({ tag_ids }) => async dispatchEvent => {
  try {
    await followTags({ tag_ids });
    dispatchEvent(authFolTags());
  } catch (e) {
    console.log(e);
  }
};
