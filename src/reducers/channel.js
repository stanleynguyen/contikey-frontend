import {
  CHANNEL_LOADING,
  CHANNEL_SUCCESS,
  CHANNEL_FAIL,
  CHANNEL_SUB,
  CHANNEL_UNSUB,
} from 'constants/actionTypes';
import { LOADING, SUCCESS, ERROR } from 'constants/misc';

export default function channel(state = {}, action) {
  switch (action.type) {
    case CHANNEL_LOADING:
      return Object.assign({}, state, { status: LOADING });
    case CHANNEL_SUCCESS:
      return Object.assign({}, state, action.payload, { status: SUCCESS });
    case CHANNEL_FAIL:
      return Object.assign({}, state, {
        status: ERROR,
        error: action.payload.message,
      });
    case CHANNEL_SUB:
      var subscribersChange;
      action.payload.subscribed
        ? (subscribersChange = 1)
        : (subscribersChange = -1);
      return Object.assign({}, state, {
        subscribed: action.payload.subscribed,
        num_subscribers: state.num_subscribers + subscribersChange,
      });
    default:
      return state;
  }
}
