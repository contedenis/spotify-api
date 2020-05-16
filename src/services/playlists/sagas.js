// @packages
import { put, takeLatest, call } from 'redux-saga/effects';

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
    yield put(getPlaylistsSuccess({ list: payload }));
  } catch ({ message }) {
    yield put(getPlaylistsFail({ errorMessage: message }));
  }
}

export function* getPlaylistsWatcher() {
  yield takeLatest(GET_PLAYLISTS, getPlaylistsWorker);
}

export default {
  getPlaylistsWatcher,
};
