// @packages
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

// @app
import * as actions from 'services/session/actions';
import Layout from 'containers/Layout';
import LoginButton from 'components/LoginButton';
import generateRandomString from 'utils/generateRandomString';
import logo from 'assets/images/logo.svg';
import { SPOTIFY_STATE } from 'services/session/constants';
import { useAuthContext } from 'components/Context/Auth';

// @own
import { ImageStyled } from './styles';

function Login({
  endLoginProcess,
  initLoginProcess,
  initLogoutProcess,
}) {
  const { authStatus, onLogin, onLogout } = useAuthContext();
  const { pathname } = useLocation();
  const state = generateRandomString(16);
  const stateKey = SPOTIFY_STATE;

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      endLoginProcess({ hash, stateKey, onLogin });
    }
  }, [endLoginProcess, stateKey]);

  function handleLoginClick() {
    initLoginProcess({ state, stateKey, location: pathname });
  }

  function handleLogOutClick() {
    initLogoutProcess({ key: 'token', onLogout });
  }

  return (
    <Layout logIn>
      <ImageStyled src={logo} className="App-logo" alt="logo" />
      <LoginButton
        handleLogOutClick={handleLogOutClick}
        handleLoginClick={handleLoginClick}
        isLogged={authStatus}
      />
    </Layout>
  );
}

Login.propTypes = {
  endLoginProcess: PropTypes.func.isRequired,
  initLoginProcess: PropTypes.func.isRequired,
  initLogoutProcess: PropTypes.func.isRequired,
};

export default connect(null, actions)(Login);
