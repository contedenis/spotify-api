// @packages
import {
  all,
  call,
  put,
  select,
  take,
  takeLatest,
} from 'redux-saga/effects';

// @app
import { GET_TRACK_SUCCESS } from 'services/track/actionTypes';
import { PUT_CURRENT_DEVICE_SUCCESS } from 'services/session/actionTypes';
import { getTrack } from 'services/track/actions';
import { putCurrentDevice } from 'services/session/actions';
import { selectContextUriTrack, selectTrackNumber } from 'services/track/selectors';
import { selectDeviceId, selectUserDevices } from 'services/session/selectors';
import { setAuthError } from 'services/authError/actions';

// @own
import { PUT_PLAY } from './actionTypes';
import { putPlay } from './api';
import { putPlayFail, putPlaySuccess } from './actions';

export function* putPlayWorker({ payload: { trackId } }) {
  try {
    yield put(getTrack({ trackId }));
    yield all([take(GET_TRACK_SUCCESS)]);
    const deviceId = yield select(selectDeviceId);
    const userDevices = yield select(selectUserDevices);
    const isCurrenteDeviceActive = userDevices.find((device) => device.id === deviceId)?.is_active;

    if (isCurrenteDeviceActive) {
      const uri = yield select(selectContextUriTrack);
      const trackNumber = yield select(selectTrackNumber);
      const payload = yield call(putPlay, uri, trackNumber);
      yield put(putPlaySuccess({ result: payload }));
    } else {
      yield put(putCurrentDevice({ deviceId }));
      yield all([take(PUT_CURRENT_DEVICE_SUCCESS)]);
      const uri = yield select(selectContextUriTrack);
      const trackNumber = yield select(selectTrackNumber);
      const payload = yield call(putPlay, uri, trackNumber);
      yield put(putPlaySuccess({ result: payload }));
    }
  } catch ({ message, serverError }) {
    yield put(putPlayFail({ errorMessage: message }));
    yield put(setAuthError({ status: serverError }));
  }
}

export function* putPlayWatcher() {
  yield takeLatest(PUT_PLAY, putPlayWorker);
}

export default {
  putPlayWatcher,
};
