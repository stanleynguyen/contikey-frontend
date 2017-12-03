import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/article';

export const loadFeed = async (params = { cursor: '' }) => {
  const { cursor } = params;
  return await serviceReq(
    fetch(`${SERVICE_URL}/feed/${cursor ? cursor : ''}`, {
      method: 'GET',
      credentials: 'include',
    }),
  );
};

export const loadArticleById = async ({ article_id }) =>
  await serviceReq(
    fetch(`${SERVICE_URL}/${article_id}`, {
      method: 'GET',
      credentials: 'include',
    }),
  );
