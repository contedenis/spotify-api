// @packages
import { put, takeLatest, call } from 'redux-saga/effects';

// @app
import { setAuthError } from 'services/authError/actions';

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
  } catch ({ message, serverError }) {
    yield put(getTrackFail({ errorMessage: message }));
    yield put(setAuthError({ status: serverError }));
  }
}

export function* getTrackWatcher() {
  yield takeLatest(GET_TRACK, getTrackWorker);
}

export default {
  getTrackWatcher,
};
