import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import store, { history } from './store';

import Layout from './components/Layout';
import HomePage from './containers/HomePage';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

render(router, document.getElementById('root'));
