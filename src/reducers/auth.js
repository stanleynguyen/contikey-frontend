import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAIL } from 'constants/actionTypes';
import { NONE, LOADING, SUCCESS, ERROR } from 'constants/misc';

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
    default:
      return state;
  }
}
