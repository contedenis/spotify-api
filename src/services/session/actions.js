// @own
import {
  END_LOGIN_PROCESS,
  GET_AVAILABLE_DEVICES,
  GET_AVAILABLE_DEVICES_FAIL,
  GET_AVAILABLE_DEVICES_SUCCESS,
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  INIT_LOGIN_PROCESS,
  INIT_LOGOUT_PROCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  PUT_CURRENT_DEVICE,
  PUT_CURRENT_DEVICE_FAIL,
  PUT_CURRENT_DEVICE_SUCCESS,
  SET_DEVICE_ID,
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

function getAvailableDevices({ token }) {
  return {
    type: GET_AVAILABLE_DEVICES,
    payload: {
      token,
    },
  };
}

function getAvailableDevicesFail({ errorMessage }) {
  return {
    type: GET_AVAILABLE_DEVICES_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function getAvailableDevicesSuccess({ devices }) {
  return {
    type: GET_AVAILABLE_DEVICES_SUCCESS,
    payload: {
      devices,
    },
  };
}

function setDeviceId({ id }) {
  return {
    type: SET_DEVICE_ID,
    payload: {
      id,
    },
  };
}

function putCurrentDevice({ deviceId }) {
  return {
    type: PUT_CURRENT_DEVICE,
    payload: {
      deviceId,
    },
  };
}

function putCurrentDeviceFail({ errorMessage }) {
  return {
    type: PUT_CURRENT_DEVICE_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function putCurrentDeviceSuccess() {
  return {
    type: PUT_CURRENT_DEVICE_SUCCESS,
  };
}

export {
  endLoginProcess,
  getAvailableDevices,
  getAvailableDevicesFail,
  getAvailableDevicesSuccess,
  getUser,
  getUserFail,
  getUserSuccess,
  initLoginProcess,
  initLogoutProcess,
  loginFail,
  loginSuccess,
  logoutFail,
  logoutSuccess,
  putCurrentDevice,
  putCurrentDeviceFail,
  putCurrentDeviceSuccess,
  setDeviceId,
};
