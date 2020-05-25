// @packages
import { all, fork } from 'redux-saga/effects';

// @app
import session from 'services/session/sagas';
import recentlyListened from 'services/recentlyListened/sagas';
import playlists from 'services/playlists/sagas';
import tracksList from 'services/tracksList/sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(session),
    ...Object.values(recentlyListened),
    ...Object.values(playlists),
    ...Object.values(tracksList),
  ].map(fork));
}
