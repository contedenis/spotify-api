// @own
import {
  END_LOGIN_PROCESS,
  INIT_LOGIN_PROCESS,
  INIT_LOGOUT_PROCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
} from './actionTypes';

function initLoginProcess({ state, stateKey }) {
  return {
    type: INIT_LOGIN_PROCESS,
    payload: {
      stateKey,
      state,
    },
  };
}

function endLoginProcess({ hash, stateKey }) {
  return {
    type: END_LOGIN_PROCESS,
    payload: {
      hash,
      stateKey,
    },
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

function loginFail({ errorMessage }) {
  return {
    type: LOGIN_FAIL,
    payload: errorMessage,
  };
}

function initLogoutProcess({ key }) {
  return {
    type: INIT_LOGOUT_PROCESS,
    payload: { key },
  };
}

function logoutFail({ errorMessage }) {
  return {
    type: LOGOUT_FAIL,
    payload: errorMessage,
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export {
  endLoginProcess,
  initLoginProcess,
  initLogoutProcess,
  loginFail,
  loginSuccess,
  logoutFail,
  logoutSuccess,
};
