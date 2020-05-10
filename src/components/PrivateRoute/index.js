// @packages
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// @app
import Login from 'pages/Login';
import { useAuthContext } from 'components/Context/Auth';

function PrivateRoute({ component, ...props }) {
  const { authStatus } = useAuthContext();
  const Component = authStatus ? component : Login;

  return <Route {...props} component={Component} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default PrivateRoute;
