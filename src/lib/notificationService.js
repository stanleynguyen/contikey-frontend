import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/notifications';

export const getNoti = async () =>
  await serviceReq(
    fetch(`${SERVICE_URL}/`, { method: 'GET', credentials: 'include' }),
  );

export const markNotiAsRead = async ({ notification_id }) => {
  if (!notification_id) return;
  return await serviceReq(
    fetch(`${SERVICE_URL}/${notification_id}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ is_read: 1 }),
    }),
  );
};
