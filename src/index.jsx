import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import store, { history } from './store';
import ModalSwitch from './components/ModalSwitch';
import { startSubs, getAccessToken } from 'lib/fbSDK';
import { authenticateUser, unauthenticateUser, tagsLoad } from 'actions';

import { GeneralLayout, NavbarLayout } from './components/Layout';
import HomePage from './containers/HomePage';
import ArticlePage from './containers/ArticlePage';
import ChannelPage from './containers/ChannelPage';
import ExplorePage from './containers/ExplorePage';
import ProfilePage from './containers/ProfilePage';
import SearchPage from './containers/SearchPage';
import LoginPage, { ModalLoginPage } from './containers/LoginPage';

// attempt to authenticate with FB on app load
// if previously logged in fb then create new session
// otherwise delete any existing session
getAccessToken()
  .then(() => store.dispatch(authenticateUser()))
  .catch(() => store.dispatch(unauthenticateUser()));
// start listening if user login/logout using fb
startSubs(
  r =>
    r.status === 'connected'
      ? store.dispatch(authenticateUser())
      : store.dispatch(unauthenticateUser()),
);
// load constant list of tags into store
store.dispatch(tagsLoad());

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GeneralLayout>
        <ModalSwitch
          history={history}
          modalRoutes={[
            <Route exact path="/login" component={ModalLoginPage} />,
          ]}
        >
          <Route exact path="/login" component={LoginPage} />
          <Route
            path="/"
            render={() => (
              <NavbarLayout>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route
                    exact
                    path="/article/:article_id"
                    component={ArticlePage}
                  />
                  <Route
                    exact
                    path="/channel/:channel_id"
                    component={ChannelPage}
                  />
                  <Route exact path="/explore" component={ExplorePage} />
                  <Route exact path="/profile" component={ProfilePage} />
                  <Route
                    exact
                    path="/profile/:profile_id"
                    component={ProfilePage}
                  />
                  <Route path="/search" component={SearchPage} />
                </Switch>
              </NavbarLayout>
            )}
          />
        </ModalSwitch>
      </GeneralLayout>
    </ConnectedRouter>
  </Provider>
);

render(router, document.getElementById('root'));
