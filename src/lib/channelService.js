import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/channel';

export const loadChannelById = async ({ channel_id }) => {
  return await serviceReq(
    fetch(`${SERVICE_URL}/${channel_id}`, {
      method: 'GET',
      credentials: 'include',
    }),
  );
};
