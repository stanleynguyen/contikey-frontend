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

export const searchFetch = ({
  searchType,
  searchTerm,
}) => async dispatchEvent => {
  console.log('searchFetch action');
  dispatchEvent(searchLoading);
  try {
    const dispatchRefresh = () =>
      dispatchEvent(authRefresh(() => searchFetch({ searchType, searchTerm })));
    // const res = await loadSearch({ searchType, searchTerm });
    const res = await withAuth(
      loadSearch.bind(null, { searchType, searchTerm }),
      dispatchRefresh,
    );
    console.log(res);
    dispatchEvent(searchSuccess(res));
  } catch (e) {
    dispatchEvent(searchFail(e));
  }
};
