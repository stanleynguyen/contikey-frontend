import {
  FEED_LOADING,
  FEED_SUCCESS,
  FEED_PAGINATING,
  FEED_PAGINATED,
  FEED_FAIL,
  FEED_GETTING_REC,
  FEED_GOT_REC,
  FEED_SUB_REC,
  FEED_UNSUB_REC,
} from 'constants/actionTypes';

import { loadFeed } from 'lib/articleService';
import { getRecommendations, subUnsubChannel } from 'lib/channelService';
import { authRefresh } from 'actions';
import { withAuth } from 'lib/authentication';

const feedLoading = () => ({ type: FEED_LOADING });
const feedSuccess = payload => ({ type: FEED_SUCCESS, payload });
const feedFail = payload => ({ type: FEED_FAIL, payload });
const feedPaginating = () => ({ type: FEED_PAGINATING });
const feedPaginated = payload => ({ type: FEED_PAGINATED });
const feedGettingRec = () => ({ type: FEED_GETTING_REC });
const feedGotRec = payload => ({ type: FEED_GOT_REC, payload });
const feedSubRec = payload => ({ type: FEED_SUB_REC, payload });
const feedUnsubRec = payload => ({ type: FEED_UNSUB_REC, payload });

export const feedFetch = () => async dispatchEvent => {
  dispatchEvent(feedLoading());
  try {
    const res = await loadFeed();
    dispatchEvent(feedSuccess(res));
  } catch (e) {
    dispatchEvent(feedFail(e));
  }
};

export const feedReload = () => async dispatchEvent => {
  try {
    const res = await loadFeed();
    dispatchEvent(feedSuccess(res));
  } catch (e) {
    console.log(e);
  }
};

export const feedPaginate = () => async (dispatchEvent, getState) => {
  const { cursor, articles } = getState().feed;
  if (!cursor || !articles || articles.length === 0) return;
  dispatchEvent(feedPaginating());
  try {
    const res = await loadFeed({ cursor });
    dispatchEvent(feedPaginated(res));
  } catch (e) {
    dispatchEvent(feedFail(e));
  }
};

export const feedGetRec = () => async dispatchEvent => {
  dispatchEvent(feedGettingRec());
  try {
    const res = await getRecommendations();
    dispatchEvent(feedGotRec(res));
  } catch (e) {
    console.log(e);
  }
};

export const feedSubscribeRec = ({ channel_id }) => async dispatchEvent => {
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => feedSubscribeRec({ channel_id })));
    await withAuth(
      subUnsubChannel.bind(null, { channel_id }, true),
      dispatchRefresh,
    );
    dispatchEvent(feedSubRec({ channel_id }));
  } catch (e) {
    console.log(e);
  }
};

export const feedUnsubscribeRec = ({ channel_id }) => async dispatchEvent => {
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => feedUnsubscribeRec({ channel_id })));
    await withAuth(
      subUnsubChannel.bind(null, { channel_id }, false),
      dispatchRefresh,
    );
    dispatchEvent(feedUnsubRec({ channel_id }));
  } catch (e) {
    console.log(e);
  }
};
