import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import feed from './feed';
import profile from './profile';
import channel from './channel';
import article from './article';
import channel from './channel';

export default combineReducers({
  router: routerReducer,
  auth,
  feed,
  profile,
  channel,
  article,
  channel,
});
