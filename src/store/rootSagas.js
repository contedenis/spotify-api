// @packages
import { all, fork } from 'redux-saga/effects';

// @app
import session from 'services/session/sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(session),
  ].map(fork));
}
