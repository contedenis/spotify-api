// @packages
import { get } from 'lodash';

// @app
import { LOGGED_OUT } from './constants';

export const selectSessionState = ({ session }) => get(session, 'sessionState', LOGGED_OUT);
