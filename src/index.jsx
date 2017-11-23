import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import store, { history } from './store';

import Layout from './components/Layout';
import HomePage from './containers/HomePage';
import ArticlePage from './containers/ArticlePage';
import ExplorePage from './containers/ExplorePage';
import ProfilePage from './containers/ProfilePage';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/article/:article_id" component={ArticlePage} />
          <Route exact path="/explore" component={ExplorePage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

render(router, document.getElementById('root'));
