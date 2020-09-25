// @packages
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// @app
import {
  endLoginProcess,
  initLoginProcess,
  initLogoutProcess,
} from 'services/session/actions';
import Layout from 'containers/Layout';
import LoginButton from 'components/LoginButton';
import generateRandomString from 'utils/generateRandomString';
import logo from 'assets/images/logo.svg';
import { SPOTIFY_STATE } from 'services/session/constants';
import { useAuthContext } from 'components/Context/Auth';

// @own
import { ImageStyled, LogIn } from './styles';

function Login() {
  const dispatch = useDispatch();
  const { authStatus, onLogin, onLogout } = useAuthContext();
  const state = generateRandomString(16);
  const stateKey = SPOTIFY_STATE;

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      dispatch(endLoginProcess({ hash, stateKey, onLogin }));
    }
  }, [endLoginProcess, stateKey, onLogin]);

  function handleLoginClick() {
    dispatch(initLoginProcess({ state, stateKey }));
  }

  function handleLogOutClick() {
    dispatch(initLogoutProcess({ key: 'token', onLogout }));
  }

  return (
    <Layout logIn>
      <LogIn>
        <ImageStyled src={logo} className="App-logo" alt="logo" />
        <LoginButton
          handleLogOutClick={handleLogOutClick}
          handleLoginClick={handleLoginClick}
          isLogged={authStatus}
        />
      </LogIn>
    </Layout>
  );
}

export default Login;
