import { BASE_URL } from 'constants/misc';
import { serviceReq } from 'lib/serviceTemplate';

const SERVICE_URL = BASE_URL + '/tag';

export const loadTags = async () => await serviceReq(fetch(`${SERVICE_URL}/`));
