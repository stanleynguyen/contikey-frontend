import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/stats';

export const getActivityLog = async () =>
  await serviceReq(
    fetch(`${SERVICE_URL}/history`, {
      method: 'GET',
      credentials: 'include',
    }),
  );
