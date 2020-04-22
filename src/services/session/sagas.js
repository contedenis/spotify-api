// @packages
import { put, takeLatest } from 'redux-saga/effects';
import { cloneDeep } from 'lodash';

// @own
import {
  AUTHENTICATION_ERROR,
  CLIENT_ID,
  REDIRECCION_ERROR,
  REDIRECT_URI,
  SCOPE,
} from './constants';
import {
  END_LOGIN_PROCESS,
  INIT_LOGIN_PROCESS,
  INIT_LOGOUT_PROCESS,
} from './actionTypes';
import {
  loginFail,
  loginSuccess,
  logoutFail,
  logoutSuccess,
} from './actions';

export function* initLoginProcessWorker({ payload: { state, stateKey } }) {
  try {
    localStorage.setItem(stateKey, state);

    const url = `https://accounts.spotify.com/authorize\
    ?response_type=token\
    &client_id=${encodeURIComponent(CLIENT_ID)}\
    &scope=${encodeURIComponent(SCOPE)}\
    &redirect_uri=${encodeURIComponent(REDIRECT_URI)}\
    &state=${encodeURIComponent(state)}`.replace(/\s/g, '');

    window.location = url;
  } catch (e) {
    yield put(loginFail({ errorMessage: REDIRECCION_ERROR }));
  }
}

export function* initLoginProcessWatcher() {
  yield takeLatest(INIT_LOGIN_PROCESS, initLoginProcessWorker);
}

export function* endLoginProcessWorker({ payload: { hash, stateKey } }) {
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

    window.location.hash = '';
    const { access_token: accessToken, state } = params;
    const storedState = localStorage.getItem(stateKey);

    if (accessToken && (state == null || state !== storedState)) {
      throw new Error(AUTHENTICATION_ERROR);
    } else {
      localStorage.removeItem(stateKey);
      if (accessToken) {
        localStorage.setItem('token', accessToken);
        yield put(loginSuccess());
      }
    }
  } catch ({ message }) {
    yield put(loginFail({ errorMessage: message }));
  }
}

export function* endLoginProcessWatcher() {
  yield takeLatest(END_LOGIN_PROCESS, endLoginProcessWorker);
}

export function* initLogoutProcessWorker({ payload: { key } }) {
  try {
    const token = localStorage.getItem(key);

    if (token) {
      localStorage.removeItem(key);
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

export default {
  endLoginProcessWatcher,
  initLoginProcessWatcher,
  initLogoutProcessWatcher,
};
