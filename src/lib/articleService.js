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

export const likeUnlikeArticle = async ({ article_id }, like = true) =>
  await serviceReq(
    fetch(`${SERVICE_URL}/${article_id}/like/`, {
      method: like ? 'POST' : 'DELETE',
      credentials: 'include',
    }),
  );

export const commentArticle = async ({ article_id, comment_text }) =>
  await serviceReq(
    fetch(`${SERVICE_URL}/${article_id}/comment/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ article_id, comment_text }),
    }),
  );

export const loadExplore = async () =>
  await serviceReq(fetch(`${SERVICE_URL}/explore/`, { method: 'GET' }));
