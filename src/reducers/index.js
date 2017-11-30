import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import feed from './feed';

export default combineReducers({
  router: routerReducer,
  auth,
  feed,
});
