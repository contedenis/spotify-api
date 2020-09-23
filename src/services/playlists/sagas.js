// @packages
import { put, takeLatest, call } from 'redux-saga/effects';

// @app
import { setAuthError } from 'services/authError/actions';

import {
  GET_PLAYLISTS,
} from './actionTypes';
import {
  getPlaylistsFail,
  getPlaylistsSuccess,
} from './actions';
import {
  getPlaylists,
} from './api';

export function* getPlaylistsWorker({ payload: { params } }) {
  try {
    const payload = yield call(getPlaylists, params);
    yield put(getPlaylistsSuccess({ list: payload.items }));
  } catch ({ message, serverError }) {
    yield put(getPlaylistsFail({ errorMessage: message }));
    yield put(setAuthError({ status: serverError }));
  }
}

export function* getPlaylistsWatcher() {
  yield takeLatest(GET_PLAYLISTS, getPlaylistsWorker);
}

export default {
  getPlaylistsWatcher,
};
