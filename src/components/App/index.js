// @packages
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// @app
import { LOGGED_IN, SPOTIFY_STATE } from 'services/session/constants';
import { selectSessionState } from 'services/session/selectors';
import * as actions from 'services/session/actions';
import generateRandomString from 'utils/generateRandomString';
import logo from 'assets/images/logo.svg';

// @own
import {
  AppStyled,
  ButtonStyled,
  HeaderStyled,
  ImageStyled,
} from './styles';

function App({
  endLoginProcess,
  initLoginProcess,
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
    return 'Log out';
  }

  return (
    <AppStyled>
      <HeaderStyled>
        <ImageStyled src={logo} className="App-logo" alt="logo" />
        <ButtonStyled onClick={isLogged ? handleLogOutClick : handleLoginClick}>
          {isLogged ? 'LOG OUT' : 'Login to Spotify'}
        </ButtonStyled>
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
