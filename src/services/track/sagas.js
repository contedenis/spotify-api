// @packages
import { put, takeLatest, call } from 'redux-saga/effects';

import {
  GET_TRACK,
} from './actionTypes';

import {
  getTrackFail,
  getTrackSuccess,
} from './actions';

import {
  getTrack as getTrackApi,
} from './api';

export function* getTrackWorker({ payload: { trackId } }) {
  try {
    const payload = yield call(getTrackApi, trackId);
    yield put(getTrackSuccess({ track: payload.data }));
  } catch ({ message }) {
    yield put(getTrackFail({ errorMessage: message }));
  }
}

export function* getTrackWatcher() {
  yield takeLatest(GET_TRACK, getTrackWorker);
}

export default {
  getTrackWatcher,
};
