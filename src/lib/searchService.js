import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/search';

export const loadSearch = async ({ searchType, searchTerm = '' }) => {
  return await serviceReq(
    fetch(`${SERVICE_URL}/${searchType}/?search_term=${searchTerm}`, {
      method: 'GET',
      credentials: 'include',
    }),
  );
};
