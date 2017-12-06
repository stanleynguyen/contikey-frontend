import {
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_CHAN_SUB,
  SEARCH_CHAN_UNSUB,
} from 'constants/actionTypes';
import { LOADING, SUCCESS, ERROR } from 'constants/misc';

export default function search(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case SEARCH_LOADING:
      return Object.assign({}, state, { status: LOADING });
    case SEARCH_SUCCESS:
      return Object.assign({}, state, action.payload, { status: SUCCESS });
    case SEARCH_FAIL:
      return Object.assign({}, state, {
        status: ERROR,
        error: action.payload.message,
      });
    case SEARCH_CHAN_SUB:
      return Object.assign({}, state, {
        subscribed: action.payload.subscribed,
      });
    default:
      return state;
  }
}
