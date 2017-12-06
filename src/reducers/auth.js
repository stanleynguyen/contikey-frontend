import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_GET_NOTI,
  AUTH_LOGOUT,
  AUTH_MARK_NOTI,
  AUTH_FOLLOW_TAGS,
} from 'constants/actionTypes';
import { NONE, LOADING, SUCCESS, ERROR } from 'constants/misc';
import { defaultState } from 'constants/misc';

export default function auth(state = {}, action) {
  switch (action.type) {
    case AUTH_LOADING:
      return Object.assign({}, state, { status: LOADING });
    case AUTH_SUCCESS:
      return Object.assign(
        {},
        state,
        { status: SUCCESS },
        {
          user: Object.assign({}, action.payload.user, {
            new_user: action.payload.new_user,
          }),
        },
      );
    case AUTH_FAIL:
      return Object.assign(
        {},
        state,
        { status: ERROR },
        { message: action.payload.message },
      );
    case AUTH_GET_NOTI:
      if (
        JSON.stringify(state.notifications) ===
        JSON.stringify(action.payload.data)
      )
        return state;
      return Object.assign({}, state, {
        notifications: action.payload.data.sort(
          (a, b) => (a.created_at > b.created_at ? -1 : 1),
        ),
      });
    case AUTH_LOGOUT:
      return Object.assign({}, defaultState.auth);
    case AUTH_MARK_NOTI:
      const idx = state.notifications.findIndex(
        n => n.notification_id === action.payload.notification_id,
      );
      return Object.assign({}, state, {
        notifications: [
          ...state.notifications.slice(0, idx),
          Object.assign({}, state.notifications[idx], { is_read: 1 }),
          ...state.notifications.slice(idx + 1),
        ],
      });
    case AUTH_FOLLOW_TAGS:
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, { new_user: false }),
      });
    default:
      return state;
  }
}
