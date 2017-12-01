import {
  PROFILE_ARTICLES_FAIL,
  PROFILE_ARTICLES_LOADING,
  PROFILE_ARTICLES_SUCCEED,
  PROFILE_CHANNELS_FAIL,
  PROFILE_CHANNELS_LOADING,
  PROFILE_CHANNELS_SUCCEED,
  PROFILE_FOLLOWING_FAIL,
  PROFILE_FOLLOWING_LOADING,
  PROFILE_FOLLOWING_SUCCEED,
  PROFILE_FRIENDS_FAIL,
  PROFILE_FRIENDS_LOADING,
  PROFILE_FRIENDS_SUCCEED,
} from 'constants/actionTypes';
import { LOADING, SUCCESS, ERROR } from 'constants/misc';

const genNewState = (currState, alteredTab, newVal) =>
  Object.assign({}, currState, {
    [alteredTab]: Object.assign(
      {},
      currState[alteredTab],
      Object.assign({}, currState[alteredTab], newVal),
    ),
  });

export default function profile(state = {}, action) {
  switch (action.type) {
    case PROFILE_ARTICLES_FAIL:
      return genNewState(state, 'articles', {
        status: ERROR,
        error: action.payload.message,
      });
    case PROFILE_ARTICLES_LOADING:
      return genNewState(state, 'articles', { status: LOADING });
    case PROFILE_ARTICLES_SUCCEED:
      return genNewState(state, 'articles', {
        status: SUCCESS,
        value: action.payload.data,
      });
    case PROFILE_CHANNELS_FAIL:
      return genNewState(state, 'channels', {
        status: ERROR,
        error: action.payload.message,
      });
    case PROFILE_CHANNELS_LOADING:
      return genNewState(state, 'channels', {
        status: LOADING,
      });
    case PROFILE_CHANNELS_SUCCEED:
      return genNewState(state, 'channels', {
        status: SUCCESS,
        value: action.payload.data,
      });
    case PROFILE_FOLLOWING_FAIL:
      return genNewState(state, 'following', {
        status: ERROR,
        error: action.payload.message,
      });
    case PROFILE_FOLLOWING_LOADING:
      return genNewState(state, 'following', { status: LOADING });
    case PROFILE_FOLLOWING_SUCCEED:
      return genNewState(state, 'following', {
        status: SUCCESS,
        value: action.payload.data,
      });
    case PROFILE_FRIENDS_FAIL:
      return genNewState(state, 'friends', {
        status: ERROR,
        error: action.payload.message,
      });
    case PROFILE_FRIENDS_LOADING:
      return genNewState(state, 'friends', { status: LOADING });
    case PROFILE_FRIENDS_SUCCEED:
      return genNewState(state, 'friends', {
        status: SUCCESS,
        value: action.payload.data,
      });
    default:
      return state;
  }
}
