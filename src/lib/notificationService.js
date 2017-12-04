import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/notifications';

export const getNoti = async () =>
  await fetch(`${SERVICE_URL}`, { method: 'GET', credentials: 'include' });
