// @packages
import { combineReducers } from 'redux';

// @app
import session from 'services/session/reducer';
import recentlyListened from 'services/recentlyListened/reducer';
import playlists from 'services/playlists/reducer';

const appReducer = combineReducers({
  session,
  recentlyListened,
  playlists,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
