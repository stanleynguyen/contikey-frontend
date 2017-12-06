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
  PROFILE_LOG_FAIL,
  PROFILE_LOG_LOADING,
  PROFILE_LOG_SUCCEED,
  PROFILE_USER_FAIL,
  PROFILE_USER_LOADING,
  PROFILE_USER_SUCCEED,
  PROFILE_CHAN_SUB,
  PROFILE_CHAN_UNSUB,
} from 'constants/actionTypes';
import { LOADING, SUCCESS, ERROR } from 'constants/misc';
import { sortByCreatedAt } from 'lib/misc';

const genNewState = (currState, alteredTab, newVal) =>
  Object.assign({}, currState, {
    [alteredTab]: Object.assign(
      {},
      currState[alteredTab],
      Object.assign({}, currState[alteredTab], newVal),
    ),
  });
const getCreatedAtFromHist = a =>
  (a.channel && a.channel.created_at) ||
  (a.followed_channel && a.followed_channel.created_at) ||
  (a.article && a.article.created_at) ||
  (a.comment && a.comment.created_at) ||
  (a.liked_article && a.liked_article.created_at);
const sortHistObj = (a, b) => {
  const aCreateAt = getCreatedAtFromHist(a);
  const bCreateAt = getCreatedAtFromHist(b);
  return aCreateAt > bCreateAt ? -1 : 1;
};

export default function profile(state = {}, action) {
  let idxInChannels, idxInFollowing, newChannelsVal, newFollowingVal;
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
        value: action.payload.data.sort(sortByCreatedAt),
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
        value: action.payload.data.sort(sortByCreatedAt),
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
        value: action.payload.data.sort(sortByCreatedAt),
      });
    case PROFILE_USER_FAIL:
      return genNewState(state, 'user', {
        status: ERROR,
        error: action.payload.message,
      });
    case PROFILE_USER_LOADING:
      return genNewState(state, 'user', {
        status: LOADING,
      });
    case PROFILE_USER_SUCCEED:
      return genNewState(state, 'user', {
        status: SUCCESS,
        value: action.payload.user,
      });
    case PROFILE_LOG_FAIL:
      return genNewState(state, 'log', {
        status: ERROR,
        error: action.payload.message,
      });
    case PROFILE_LOG_LOADING:
      return genNewState(state, 'log', {
        status: LOADING,
      });
    case PROFILE_LOG_SUCCEED:
      return genNewState(state, 'log', {
        status: SUCCESS,
        value: action.payload.history.sort(sortHistObj),
      });
    case PROFILE_CHAN_SUB:
      idxInChannels = state.channels.value.findIndex(
        v => v.channel_id === action.payload.channel_id,
      );
      idxInFollowing = state.following.value.findIndex(
        v => v.channel_id === action.payload.channel_id,
      );
      newChannelsVal =
        idxInChannels !== -1
          ? [
              ...state.channels.value.slice(0, idxInChannels),
              Object.assign(state.channels.value[idxInChannels], {
                subscribed: true,
                num_subscribers:
                  state.channels.value[idxInChannels].num_subscribers + 1,
              }),
              ...state.channels.value.slice(idxInChannels + 1),
            ]
          : state.channels.value;
      newFollowingVal =
        idxInFollowing !== -1
          ? [
              ...state.following.value.slice(0, idxInFollowing),
              Object.assign(state.following.value[idxInFollowing], {
                subscribed: true,
                num_subscribers:
                  state.following.value[idxInFollowing].num_subscribers + 1,
              }),
              ...state.following.value.slice(idxInFollowing + 1),
            ]
          : state.following.value;
      return Object.assign({}, state, {
        channels: Object.assign({}, state.channels, { value: newChannelsVal }),
        following: Object.assign({}, state.following, {
          value: newFollowingVal,
        }),
      });
    case PROFILE_CHAN_UNSUB:
      idxInChannels = state.channels.value.findIndex(
        v => v.channel_id === action.payload.channel_id,
      );
      idxInFollowing = state.following.value.findIndex(
        v => v.channel_id === action.payload.channel_id,
      );
      newChannelsVal =
        idxInChannels !== -1
          ? [
              ...state.channels.value.slice(0, idxInChannels),
              Object.assign(state.channels.value[idxInChannels], {
                subscribed: false,
                num_subscribers:
                  state.channels.value[idxInChannels].num_subscribers - 1,
              }),
              ...state.channels.value.slice(idxInChannels + 1),
            ]
          : state.channels.value;
      newFollowingVal =
        idxInFollowing !== -1
          ? [
              ...state.following.value.slice(0, idxInFollowing),
              Object.assign(state.following.value[idxInFollowing], {
                subscribed: false,
                num_subscribers:
                  state.following.value[idxInFollowing].num_subscribers - 1,
              }),
              ...state.following.value.slice(idxInFollowing + 1),
            ]
          : state.following.value;
      return Object.assign({}, state, {
        channels: Object.assign({}, state.channels, { value: newChannelsVal }),
        following: Object.assign({}, state.following, {
          value: newFollowingVal,
        }),
      });
    default:
      return state;
  }
}
