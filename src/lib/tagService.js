import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/tag';

export const loadTags = async () => await serviceReq(fetch(`${SERVICE_URL}/`));

export const followTags = async (params = { tag_ids: [] }) =>
  await serviceReq(
    fetch(`${SERVICE_URL}/follow/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ tag_ids: params.tag_ids }),
    }),
  );
