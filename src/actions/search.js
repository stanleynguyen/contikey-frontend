import {
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_CHAN_SUB,
  SEARCH_CHAN_UNSUB,
} from 'constants/actionTypes';
import { authRefresh } from './auth';
import { withAuth } from 'lib/authentication';
import { loadSearch } from 'lib/searchService';
import { subUnsubChannel } from 'lib/channelService';

const searchLoading = () => ({ type: SEARCH_LOADING });
const searchSuccess = payload => ({ type: SEARCH_SUCCESS, payload });
const searchFail = payload => ({ type: SEARCH_FAIL, payload });
const channelSubUnsub = payload => ({ type: SEARCH_CHAN_SUB, payload });

export const searchFetch = ({
  searchType,
  searchTerm,
}) => async dispatchEvent => {
  dispatchEvent(searchLoading);
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => searchFetch({ searchType, searchTerm })));
    const res = await withAuth(
      loadSearch.bind(null, { searchType, searchTerm }),
      dispatchRefresh,
    );
    dispatchEvent(
      searchSuccess({ tab: searchType, query: searchTerm, ...res }),
    );
  } catch (e) {
    dispatchEvent(searchFail(e));
  }
};

export const searchSubChan = ({ channel_id, sub }) => async dispatchEvent => {
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => channelSubscribe({ channel_id })));
    await withAuth(
      subUnsubChannel.bind(null, { channel_id }, sub),
      dispatchEvent,
    );
    dispatchEvent(channelSubUnsub({ subscribed: sub, channel_id }));
  } catch (e) {
    console.log(e);
  }
};
