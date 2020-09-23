// @packages
import { combineReducers } from 'redux';

// @app
import session from 'services/session/reducer';
import recentlyListened from 'services/recentlyListened/reducer';
import playlists from 'services/playlists/reducer';
import tracksList from 'services/tracksList/reducer';
import playing from 'services/playing/reducer';
import track from 'services/track/reducer';
import authError from 'services/authError/reducer';

const appReducer = combineReducers({
  session,
  recentlyListened,
  playlists,
  tracksList,
  playing,
  track,
  authError,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
