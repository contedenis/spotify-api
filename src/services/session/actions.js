// @own
import {
  END_LOGIN_PROCESS,
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  INIT_LOGIN_PROCESS,
  INIT_LOGOUT_PROCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
} from './actionTypes';

function initLoginProcess({ location, state, stateKey }) {
  return {
    type: INIT_LOGIN_PROCESS,
    payload: {
      location,
      state,
      stateKey,
    },
  };
}

function endLoginProcess({ hash, onLogin, stateKey }) {
  return {
    type: END_LOGIN_PROCESS,
    payload: {
      hash,
      onLogin,
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
    payload: {
      errorMessage,
    },
  };
}

function initLogoutProcess({ key, onLogout }) {
  return {
    type: INIT_LOGOUT_PROCESS,
    payload: {
      key,
      onLogout,
    },
  };
}

function logoutFail({ errorMessage }) {
  return {
    type: LOGOUT_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

function getUser({ token }) {
  return {
    type: GET_USER,
    payload: {
      token,
    },
  };
}

function getUserFail({ errorMessage }) {
  return {
    type: GET_USER_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function getUserSuccess({ user }) {
  return {
    type: GET_USER_SUCCESS,
    payload: {
      user,
    },
  };
}

export {
  endLoginProcess,
  getUser,
  getUserFail,
  getUserSuccess,
  initLoginProcess,
  initLogoutProcess,
  loginFail,
  loginSuccess,
  logoutFail,
  logoutSuccess,
};
