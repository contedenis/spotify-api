// @packages
import { put, takeLatest, call } from 'redux-saga/effects';
import { cloneDeep } from 'lodash';

// @app
import { baseUrl } from 'utils/requestHelper';
import { setAuthError } from 'services/authError/actions';

// @own
import {
  AUTHENTICATION_ERROR,
  CLIENT_ID,
  REDIRECCION_ERROR,
  SCOPE,
} from './constants';
import {
  END_LOGIN_PROCESS,
  GET_AVAILABLE_DEVICES,
  GET_USER,
  INIT_LOGIN_PROCESS,
  INIT_LOGOUT_PROCESS,
  PUT_CURRENT_DEVICE,
} from './actionTypes';
import {
  getAvailableDevicesFail,
  getAvailableDevicesSuccess,
  getUser,
  getUserFail,
  getUserSuccess,
  loginFail,
  loginSuccess,
  logoutFail,
  logoutSuccess,
  putCurrentDeviceFail,
  putCurrentDeviceSuccess,
} from './actions';
import {
  getAvailableDevices,
  getUser as getUserApi,
  putCurrentDevice,
} from './api';

export function* initLoginProcessWorker({ payload: { state, stateKey } }) {
  try {
    localStorage.setItem(stateKey, state);

    const url = `https://accounts.spotify.com/authorize\
    ?response_type=token\
    &client_id=${encodeURIComponent(CLIENT_ID)}\
    &scope=${encodeURIComponent(SCOPE)}\
    &redirect_uri=${encodeURIComponent(`${baseUrl}`)}\
    &state=${encodeURIComponent(state)}`.replace(/\s/g, '');

    window.location = url;
  } catch (e) {
    yield put(loginFail({ errorMessage: REDIRECCION_ERROR }));
  }
}

export function* initLoginProcessWatcher() {
  yield takeLatest(INIT_LOGIN_PROCESS, initLoginProcessWorker);
}

export function* endLoginProcessWorker({ payload: { hash, stateKey, onLogin } }) {
  try {
    const params = hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
        const newItem = cloneDeep(initial);
        if (item) {
          const parts = item.split('=');
          newItem[parts[0]] = decodeURIComponent(parts[1]);
        }
        return newItem;
      }, {});

    window.location.assign('/');
    const { access_token: accessToken, state } = params;
    const storedState = localStorage.getItem(stateKey);

    if (accessToken && (state == null || state !== storedState)) {
      throw new Error(AUTHENTICATION_ERROR);
    } else {
      localStorage.removeItem(stateKey);
      if (accessToken) {
        localStorage.setItem('token', accessToken);
        yield put(loginSuccess());
        yield put(getUser({ token: accessToken }));
        onLogin();
      }
    }
  } catch ({ message, serverError }) {
    yield put(loginFail({ errorMessage: message }));
    yield put(setAuthError({ status: serverError }));
  }
}

export function* endLoginProcessWatcher() {
  yield takeLatest(END_LOGIN_PROCESS, endLoginProcessWorker);
}

export function* initLogoutProcessWorker({ payload: { key, onLogout } }) {
  try {
    const token = localStorage.getItem(key);
    if (token) {
      localStorage.removeItem(key);
      window.history.pushState({}, document.title, '');
      onLogout();
      yield put(logoutSuccess());
    } else {
      throw new Error(`${key} was not found`);
    }
  } catch ({ message }) {
    yield put(logoutFail({ errorMessage: message }));
  }
}

export function* initLogoutProcessWatcher() {
  yield takeLatest(INIT_LOGOUT_PROCESS, initLogoutProcessWorker);
}

export function* getUserWorker({ payload: { token } }) {
  try {
    const payload = yield call(getUserApi, token);
    yield put(getUserSuccess({ user: payload }));
  } catch ({ message, serverError }) {
    yield put(getUserFail({ errorMessage: message }));
    yield put(setAuthError({ status: serverError }));
  }
}

export function* getUserWatcher() {
  yield takeLatest(GET_USER, getUserWorker);
}

export function* getAvailableDevicesWorker({ payload: { token } }) {
  try {
    const payload = yield call(getAvailableDevices, token);
    yield put(getAvailableDevicesSuccess({ devices: payload }));
  } catch ({ message, serverError }) {
    yield put(getAvailableDevicesFail({ errorMessage: message }));
    yield put(setAuthError({ status: serverError }));
  }
}

export function* getAvailableDevicesWatcher() {
  yield takeLatest(GET_AVAILABLE_DEVICES, getAvailableDevicesWorker);
}

export function* putCurrentDeviceWorker({ payload: { deviceId } }) {
  try {
    yield call(putCurrentDevice, deviceId);
    yield put(putCurrentDeviceSuccess());
  } catch ({ message, serverError }) {
    yield put(putCurrentDeviceFail({ errorMessage: message }));
    yield put(setAuthError({ status: serverError }));
  }
}

export function* putCurrentDeviceWatcher() {
  yield takeLatest(PUT_CURRENT_DEVICE, putCurrentDeviceWorker);
}

export default {
  endLoginProcessWatcher,
  getAvailableDevicesWatcher,
  getUserWatcher,
  initLoginProcessWatcher,
  initLogoutProcessWatcher,
  putCurrentDeviceWatcher,
};
