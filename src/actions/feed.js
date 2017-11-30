import {
  FEED_LOADING,
  FEED_SUCCESS,
  FEED_PAGINATING,
  FEED_PAGINATED,
  FEED_FAIL,
} from 'constants/actionTypes';
import { NONE, LOADING, SUCCESS, ERROR } from 'constants/misc';

import { loadFeed } from 'lib/articleService';

const feedLoading = () => ({ type: FEED_LOADING });
const feedSuccess = payload => ({ type: FEED_SUCCESS, payload });
const feedFail = payload => ({ type: FEED_FAIL, payload });
const feedPaginating = () => ({ type: FEED_PAGINATING });
const feedPaginated = payload => ({ type: FEED_PAGINATED });

export const feedFetch = () => async dispatchEvent => {
  dispatchEvent(feedLoading());
  try {
    const res = await loadFeed();
    dispatchEvent(feedSuccess(res));
  } catch (e) {
    dispatchEvent(feedFail(e));
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
