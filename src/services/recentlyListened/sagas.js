// @packages
import { put, takeLatest, call } from 'redux-saga/effects';

// @app
import { setAuthError } from 'services/authError/actions';

import {
  GET_RECENTLY_LISTENED,
} from './actionTypes';
import {
  getRecentlyListenedFail,
  getRecentlyListenedSuccess,
} from './actions';
import {
  getRecentlyListened,
} from './api';

export function* getRecentlyListenedWorker({ payload: { params } }) {
  try {
    const payload = yield call(getRecentlyListened, params);
    yield put(getRecentlyListenedSuccess({ list: payload }));
  } catch ({ message, serverError }) {
    yield put(getRecentlyListenedFail({ errorMessage: message }));
    yield put(setAuthError({ status: serverError }));
  }
}

export function* getRecentlyListenedWatcher() {
  yield takeLatest(GET_RECENTLY_LISTENED, getRecentlyListenedWorker);
}

export default {
  getRecentlyListenedWatcher,
};
