// @packages
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// @app
import Me from 'pages/Me';
import PrivateRoute from 'components/PrivateRoute';

function Routes() {
  const meRoutes = [
    '/',
    '/playlists/:id',
    '/recent-played/:id',
  ];
  return (
    <Switch>
      <PrivateRoute exact path={meRoutes} component={Me} />
      <Route render={() => <h1>404: Page not found</h1>} />
    </Switch>
  );
}

export default Routes;
