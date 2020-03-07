// @own
import {
  END_LOGIN_PROCESS,
  INIT_LOGIN_PROCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
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

export {
  endLoginProcess,
  initLoginProcess,
  loginFail,
  loginSuccess,
};
