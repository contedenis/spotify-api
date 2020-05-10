// @packages
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// @app
import Home from 'pages/Home';
import PrivateRoute from 'components/PrivateRoute';

function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/callback" component={() => <div>Hello world!</div>} />
      <Route render={() => <h1>404: Page not found</h1>} />
    </Switch>
  );
}

export default Routes;
