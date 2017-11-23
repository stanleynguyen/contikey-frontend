import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import store, { history } from './store';
import ModalSwitch from './components/ModalSwitch';
import { load } from './lib/fbSDK';

import Layout from './components/Layout';
import HomePage from './containers/HomePage';
import ArticlePage from './containers/ArticlePage';
import ExplorePage from './containers/ExplorePage';
import ProfilePage from './containers/ProfilePage';
import LoginPage, { ModalLoginPage } from './containers/LoginPage';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <ModalSwitch
          history={history}
          modalRoutes={[<Route path="/login" component={ModalLoginPage} />]}
        >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/article/:article_id" component={ArticlePage} />
          <Route exact path="/explore" component={ExplorePage} />
          <Route exact path="/profile" component={ProfilePage} />
        </ModalSwitch>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

render(router, document.getElementById('root'));
