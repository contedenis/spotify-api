// @packages
import { put, takeLatest, call } from 'redux-saga/effects';

import {
  GET_ALBUM,
} from './actionTypes';
import {
  getAlbumFail,
  getAlbumSuccess,
} from './actions';
import {
  getAlbum,
} from './api';

export function* getAlbumWorker({ payload: { id } }) {
  try {
    const payload = yield call(getAlbum, id);
    yield put(getAlbumSuccess({ album: payload }));
  } catch ({ message }) {
    yield put(getAlbumFail({ errorMessage: message }));
  }
}

export function* getAlbumWatcher() {
  yield takeLatest(GET_ALBUM, getAlbumWorker);
}

export default {
  getAlbumWatcher,
};
