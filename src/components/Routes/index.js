// @packages
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// @app
import Me from 'pages/Me';
import PrivateRoute from 'components/PrivateRoute';

function Routes() {
  const meRoutes = [
    '/me',
    '/me/playlists/:id',
    '/me/recent-played/:id',
  ];
  return (
    <Switch>
      <PrivateRoute path={meRoutes} component={Me} />
      <PrivateRoute exact path="/callback" component={() => <div>Hello world!</div>} />
      <Route render={() => <h1>404: Page not found</h1>} />
    </Switch>
  );
}

export default Routes;
