// @packages
import { combineReducers } from 'redux';

// @app
import session from 'services/session/reducer';

const appReducer = combineReducers({
  session,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
