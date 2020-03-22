import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import MainLayout from './layouts/MainLayout';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
    {...rest}
  />
);

export default () => (
  <Router>
    <Switch>
      <AppRoute path="/" component={Main} layout={MainLayout} />
    </Switch>
  </Router>
);
