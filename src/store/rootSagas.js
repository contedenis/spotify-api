// @packages
import { all, fork } from 'redux-saga/effects';

// @app
import session from 'services/session/sagas';
import recentlyListened from 'services/recentlyListened/sagas';
import playlists from 'services/playlists/sagas';
import tracksList from 'services/tracksList/sagas';
import playing from 'services/playing/sagas';
import track from 'services/track/sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(session),
    ...Object.values(recentlyListened),
    ...Object.values(playlists),
    ...Object.values(tracksList),
    ...Object.values(playing),
    ...Object.values(track),
  ].map(fork));
}
