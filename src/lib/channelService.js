import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/channel';

export const loadChannelById = async ({ channel_id }) =>
  await serviceReq(
    fetch(`${SERVICE_URL}/${channel_id}`, {
      method: 'GET',
      credentials: 'include',
    }),
  );

export const getRecommendations = async () =>
  await serviceReq(
    fetch(`${SERVICE_URL}/recommended/`, {
      method: 'GET',
      credentials: 'include',
    }),
  );

export const subUnsubChannel = async ({ channel_id }, sub = true) =>
  await serviceReq(
    fetch(`${SERVICE_URL}/${channel_id}/follow/`, {
      method: sub ? 'POST' : 'DELETE',
      credentials: 'include',
    }),
  );
