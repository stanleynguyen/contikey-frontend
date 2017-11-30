import {
  FEED_LOADING,
  FEED_SUCCESS,
  FEED_PAGINATING,
  FEED_PAGINATED,
  FEED_FAIL,
} from 'constants/actionTypes';
import { NONE, SUCCESS, ERROR, LOADING } from 'constants/misc';

export default function feed(state = {}, action) {
  switch (action.type) {
    case FEED_LOADING:
      return { status: LOADING, articles: [], error: '' };
    case FEED_SUCCESS:
      return {
        status: SUCCESS,
        articles: action.payload.feed,
        error: '',
      };
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
    default:
      return state;
  }
}
