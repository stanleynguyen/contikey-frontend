import {
  ARTICLE_FAIL,
  ARTICLE_LOADING,
  ARTICLE_SUCCESS,
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
    default:
      return state;
  }
}
