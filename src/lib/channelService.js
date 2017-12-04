import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/channel';

export const postChannel = async params => {
  return await serviceReq(
    fetch(`${SERVICE_URL}/new/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }),
  );
};
