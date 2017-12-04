import {
  CHANNEL_FAIL,
  CHANNEL_LOADING,
  CHANNEL_SUCCESS,
} from 'constants/actionTypes';
import { LOADING, SUCCESS, ERROR } from 'constants/misc';

export default function(state = {}, action) {
  switch (action.type) {
    case CHANNEL_FAIL:
      return Object.assign({}, state, {
        status: ERROR,
        error: action.payload.message,
      });
    case CHANNEL_LOADING:
      return Object.assign({}, state, { status: LOADING });
    case CHANNEL_SUCCESS:
      return Object.assign(
        {},
        state,
        action.payload,
        { status: SUCCESS },
        action.payload.channel,
      );
    default:
      return state;
  }
}
