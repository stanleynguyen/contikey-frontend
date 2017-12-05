import {
  ARTICLE_FAIL,
  ARTICLE_LOADING,
  ARTICLE_SUCCESS,
  ARTICLE_LIKE,
  ARTICLE_UNLIKE,
  ARTICLE_COMMENT,
  ARTICLE_COMMENTING,
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
        action.payload,
        { status: SUCCESS },
        {
          comments: action.payload.comments.sort(
            (a, b) => (a.created_at > b.created_at ? -1 : 1),
          ),
        },
      );
    case ARTICLE_LIKE:
      return Object.assign({}, state, { liked: true, likes: state.likes + 1 });
    case ARTICLE_UNLIKE:
      return Object.assign({}, state, { liked: false, likes: state.likes - 1 });
    case ARTICLE_COMMENT:
      return Object.assign({}, state, {
        comments: [action.payload, ...state.comments],
        comment_status: SUCCESS,
      });
    case ARTICLE_COMMENTING:
      return Object.assign({}, state, { comment_status: LOADING });
    default:
      return state;
  }
}
