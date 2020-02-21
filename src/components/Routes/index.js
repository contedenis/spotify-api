// @packages
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// @app
import App from 'components/App';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route render={() => <h1>404: Page not found</h1>} />
    </Switch>
  );
}

export default Routes;
