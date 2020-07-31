// @packages
import { put, takeLatest, call } from 'redux-saga/effects';

import {
  getTrack as getTrackApi,
} from 'services/track/api';
import {
  PUT_PLAY,
} from './actionTypes';

import {
  putPlayFail,
  putPlaySuccess,
} from './actions';

import {
  putPlay as putPlayApi,
} from './api';

export function* putPlayWorker({ payload: { trackId } }) {
  try {
    const track = yield call(getTrackApi, trackId);
    const { data: { album: { uri }, track_number } } = track;
    const payload = yield call(putPlayApi, uri, track_number);
    yield put(putPlaySuccess({ result: payload }));
  } catch ({ message }) {
    yield put(putPlayFail({ errorMessage: message }));
  }
}

export function* putPlayWatcher() {
  yield takeLatest(PUT_PLAY, putPlayWorker);
}

export default {
  putPlayWatcher,
};
