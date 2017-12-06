import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import article from './article';
import auth from './auth';
import channel from './channel';
import feed from './feed';
import profile from './profile';
import search from './search';
import tags from './tags';

export default combineReducers({
  router: routerReducer,
  article,
  auth,
  channel,
  feed,
  profile,
  search,
  tags,
});
