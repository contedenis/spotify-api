// @packages
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// @app
import * as actions from 'services/session/actions';
import LoginButton from 'components/LoginButton';
import generateRandomString from 'utils/generateRandomString';
import logo from 'assets/images/logo.svg';
import { LOGGED_IN, SPOTIFY_STATE } from 'services/session/constants';
import { selectSessionState } from 'services/session/selectors';

// @own
import {
  AppStyled,
  HeaderStyled,
  ImageStyled,
} from './styles';

function App({
  endLoginProcess,
  initLoginProcess,
  initLogoutProcess,
  sessionState,
}) {
  const [isLogged, setIsLogged] = useState(false);
  const state = generateRandomString(16);
  const stateKey = SPOTIFY_STATE;

  useEffect(() => {
    const { hash } = window.location;
    const token = localStorage.getItem('token');

    if (token && sessionState === LOGGED_IN) {
      setIsLogged(true);
    } else if (hash) {
      endLoginProcess({ hash, stateKey });
    } else {
      setIsLogged(false);
    }
  }, [sessionState, endLoginProcess, stateKey]);

  function handleLoginClick() {
    initLoginProcess({ state, stateKey });
  }

  function handleLogOutClick() {
    initLogoutProcess({ key: 'token' });
  }

  return (
    <AppStyled>
      <HeaderStyled>
        <ImageStyled src={logo} className="App-logo" alt="logo" />
        <LoginButton
          handleLogOutClick={handleLogOutClick}
          handleLoginClick={handleLoginClick}
          isLogged={isLogged}
        />
      </HeaderStyled>
    </AppStyled>
  );
}

App.propTypes = {
  endLoginProcess: PropTypes.func.isRequired,
  initLoginProcess: PropTypes.func.isRequired,
  sessionState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sessionState: selectSessionState(state),
});

export default connect(mapStateToProps, actions)(App);
