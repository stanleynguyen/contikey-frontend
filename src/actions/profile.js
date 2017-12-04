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
  PROFILE_LOG_LOADING,
  PROFILE_LOG_SUCCEED,
  PROFILE_LOG_FAIL,
} from 'constants/actionTypes';
import { authRefresh } from './auth';
import { withAuth } from 'lib/authentication';
import {
  getChannels,
  getArticles,
  getFollowing,
  getFriends,
} from 'lib/userService';
import { getActivityLog } from 'lib/statService';

const profileArticlesLoading = () => ({
  type: PROFILE_ARTICLES_LOADING,
});
const profileArticlesSucceed = payload => ({
  type: PROFILE_ARTICLES_SUCCEED,
  payload,
});
const profileArticlesFail = payload => ({
  type: PROFILE_ARTICLES_FAIL,
  payload,
});
const profileChannelsLoading = () => ({
  type: PROFILE_CHANNELS_LOADING,
});
const profileChannelsSucceed = payload => ({
  type: PROFILE_CHANNELS_SUCCEED,
  payload,
});
const profileChannelsFail = payload => ({
  type: PROFILE_CHANNELS_FAIL,
  payload,
});
const profileFollowingLoading = () => ({
  type: PROFILE_FOLLOWING_LOADING,
});
const profileFollowingSucceed = payload => ({
  type: PROFILE_FOLLOWING_SUCCEED,
  payload,
});
const profileFollowingFail = payload => ({
  type: PROFILE_FOLLOWING_FAIL,
  payload,
});
const profileFriendsLoading = () => ({ type: PROFILE_FRIENDS_LOADING });
const profileFriendsSucceed = payload => ({
  type: PROFILE_FRIENDS_SUCCEED,
  payload,
});
const profileFriendsFail = payload => ({
  type: PROFILE_FRIENDS_FAIL,
  payload,
});
const profileLogLoading = () => ({ type: PROFILE_LOG_LOADING });
const profileLogSucceed = payload => ({ type: PROFILE_LOG_SUCCEED, payload });
const profileLogFail = payload => ({ type: PROFILE_LOG_FAIL, payload });

export const profileLoadChannels = (
  params = { user_id: '' },
) => async dispatchEvent => {
  dispatchEvent(profileChannelsLoading());
  const { user_id } = params;
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => profileLoadChannels({ user_id })));
    const res = await withAuth(
      getChannels.bind(null, { user_id }),
      dispatchRefresh,
    );
    dispatchEvent(profileChannelsSucceed(res));
  } catch (e) {
    dispatchEvent(profileChannelsFail(e));
  }
};

export const profileLoadArticles = (
  params = { user_id: '' },
) => async dispatchEvent => {
  dispatchEvent(profileArticlesLoading());
  const { user_id } = params;
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => profileLoadArticles({ user_id })));
    const res = await withAuth(
      getArticles.bind(null, { user_id }),
      dispatchRefresh,
    );
    dispatchEvent(profileArticlesSucceed(res));
  } catch (e) {
    dispatchEvent(profileArticlesFail(e));
  }
};

export const profileLoadFriends = (
  params = { user_id: '' },
) => async dispatchEvent => {
  dispatchEvent(profileFriendsLoading());
  const { user_id } = params;
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => profileLoadFriends({ user_id })));
    const res = await withAuth(
      getFriends.bind(null, { user_id }),
      dispatchRefresh,
    );
    dispatchEvent(profileFriendsSucceed(res));
  } catch (e) {
    dispatchEvent(profileFriendsFail(e));
  }
};

export const profileLoadFollowing = (
  params = { user_id: '' },
) => async dispatchEvent => {
  dispatchEvent(profileFollowingLoading());
  const { user_id } = params;
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => profileLoadFollowing({ user_id })));
    const res = await withAuth(
      getFollowing.bind(null, { user_id }),
      dispatchRefresh,
    );
    dispatchEvent(profileFollowingSucceed(res));
  } catch (e) {
    dispatchEvent(profileFollowingFail(e));
  }
};

export const profileLoadLog = () => async dispatchEvent => {
  dispatchEvent(profileLogLoading());
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => profileLoadLog()));
    const res = await withAuth(getActivityLog, dispatchRefresh);
    dispatchEvent(profileLogSucceed(res));
  } catch (e) {
    dispatchEvent(profileLogFail(e));
  }
};
