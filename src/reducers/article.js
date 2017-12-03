import {
  ARTICLE_FAIL,
  ARTICLE_LOADING,
  ARTICLE_SUCCESS,
  ARTICLE_LIKE,
  ARTICLE_UNLIKE,
} from 'constants/actionTypes';
import { LOADING, SUCCESS, ERROR } from 'constants/misc';

export default function article(state = {}, action) {
  switch (action.type) {
    case ARTICLE_FAIL:
      return Object.assign({}, state, {
        status: ERROR,
        error: action.payload.message,
      });
    case ARTICLE_LOADING:
      return Object.assign({}, state, { status: LOADING });
    case ARTICLE_SUCCESS:
      return Object.assign(
        {},
        state,
        { status: SUCCESS },
        action.payload.article,
      );
    case ARTICLE_LIKE:
      return Object.assign({}, state, { liked: true, likes: state.likes + 1 });
    case ARTICLE_UNLIKE:
      return Object.assign({}, state, { liked: false, likes: state.likes - 1 });
    default:
      return state;
  }
}
