import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';
import { getAccessToken } from 'lib/fbSDK';

const SERVICE_URL = BASE_URL + '/user';

export const login = async () => {
  const accessToken = await getAccessToken();
  const res = await serviceReq(
    fetch(`${SERVICE_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accessToken }),
    }),
  );
  return res;
};
