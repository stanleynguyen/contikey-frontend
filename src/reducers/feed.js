import {
  FEED_LOADING,
  FEED_SUCCESS,
  FEED_PAGINATING,
  FEED_PAGINATED,
  FEED_FAIL,
  FEED_GETTING_REC,
  FEED_GOT_REC,
  FEED_UNSUB_REC,
  FEED_SUB_REC,
} from 'constants/actionTypes';
import { NONE, SUCCESS, ERROR, LOADING } from 'constants/misc';

export default function feed(state = {}, action) {
  let idx;

  switch (action.type) {
    case FEED_LOADING:
      return Object.assign({}, state, {
        status: LOADING,
        articles: [],
        error: '',
      });
    case FEED_SUCCESS:
      return Object.assign({}, state, {
        status: SUCCESS,
        articles: action.payload.feed,
        error: '',
      });
    case FEED_PAGINATING:
      return Object.assign({}, state, {
        status: LOADING,
      });
    case FEED_PAGINATED:
      return Object.assign({}, state, {
        status: SUCCESS,
        articles: [...state.articles, ...action.payload.feed],
      });
    case FEED_FAIL:
      return Object.assign({}, state, {
        status: ERROR,
        error: action.payload.message,
      });
    case FEED_GETTING_REC:
      return state;
    case FEED_GOT_REC:
      return Object.assign({}, state, {
        recommendations: action.payload.channel,
      });
    case FEED_SUB_REC:
      idx = state.recommendations.findIndex(
        v => v.channel_id === action.payload.channel_id,
      );
      return Object.assign({}, state, {
        recommendations: [
          ...state.recommendations.slice(0, idx),
          Object.assign({}, state.recommendations[idx], {
            subscribed: true,
            num_subscribers: state.recommendations[idx].num_subscribers + 1,
          }),
        ],
      });
    case FEED_UNSUB_REC:
      idx = state.recommendations.findIndex(
        v => v.channel_id === action.payload.channel_id,
      );
      return Object.assign({}, state, {
        recommendations: [
          ...state.recommendations.slice(0, idx),
          Object.assign({}, state.recommendations[idx], {
            subscribed: false,
            num_subscribers: state.recommendations[idx].num_subscribers - 1,
          }),
        ],
      });
    default:
      return state;
  }
}
