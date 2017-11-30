import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/article';

export const loadFeed = async params => {
  let cursor;
  if (params) {
    cursor = params.cursor;
  }
  return await serviceReq(
    fetch(`${SERVICE_URL}/feed/${cursor ? cursor : ''}`, {
      method: 'GET',
    }),
  );
};
