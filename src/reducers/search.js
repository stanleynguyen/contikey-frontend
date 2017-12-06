import {
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_CHAN_SUB,
  SEARCH_CHAN_UNSUB,
} from 'constants/actionTypes';
import { LOADING, SUCCESS, ERROR } from 'constants/misc';

export default function search(state = {}, action) {
  switch (action.type) {
    case SEARCH_LOADING:
      return Object.assign({}, state, { status: LOADING });
    case SEARCH_SUCCESS:
      let newState = Object.assign({}, state, {
        tab: action.payload.tab,
        status: SUCCESS,
      });
      newState[action.payload.tab] = action.payload.data;
      return newState;
    case SEARCH_FAIL:
      return Object.assign({}, state, {
        status: ERROR,
        error: action.payload.message,
      });
    case SEARCH_CHAN_SUB:
      newState = Object.assign({}, state);
      const idx = state.channels.findIndex(
        v => v.channel_id === action.payload.channel_id,
      );
      newState.channels[idx].subscribed = action.payload.subscribed;
      var subscribersChange;
      action.payload.subscribed
        ? (subscribersChange = 1)
        : (subscribersChange = -1);

      newState.channels[idx].num_subscribers =
        newState.channels[idx].num_subscribers + subscribersChange;
      return newState;
    default:
      return state;
  }
}
