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
      credentials: 'include',
      body: JSON.stringify({ accessToken }),
    }),
  );
  return res;
};

const getFieldTemplate = field => async (params = { user_id: '' }) => {
  const { user_id } = params;
  const res = await serviceReq(
    fetch(`${SERVICE_URL}/${user_id ? `${user_id}/` : ''}${field}/`, {
      credentials: 'include',
    }),
  );
  return res;
};
export const getChannels = getFieldTemplate('channels');
export const getArticles = getFieldTemplate('articles');
export const getFriends = getFieldTemplate('friends');
export const getFollowing = getFieldTemplate('following');
export const getUserInfo = async (params = { user_id: '' }) => {
  const { user_id } = params;
  return await serviceReq(
    fetch(`${SERVICE_URL}/${user_id ? `${user_id}/` : ''}`, {
      credentials: 'include',
    }),
  );
};
