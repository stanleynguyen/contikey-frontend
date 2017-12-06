import { TAGS_FAIL, TAGS_LOADING, TAGS_SUCCESS } from 'constants/actionTypes';
import { LOADING, SUCCESS, ERROR } from 'constants/misc';

export default function tags(state = {}, action) {
  switch (action.type) {
    case TAGS_FAIL:
      return Object.assign({}, state, {
        status: ERROR,
        error: action.payload.message,
      });
    case TAGS_LOADING:
      return Object.assign({}, state, { status: LOADING });
    case TAGS_SUCCESS:
      return Object.assign({}, state, {
        status: SUCCESS,
        value: action.payload.data,
      });
    default:
      return state;
  }
}
