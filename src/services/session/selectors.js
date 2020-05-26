// @packages
import { get } from 'lodash';

// @app
import { LOGGED_OUT } from './constants';

export const selectSessionState = ({ session }) => get(session, 'sessionState', LOGGED_OUT);
export const selectUserCountry = ({ session }) => get(session, 'user.country', '');
export const selectUserDevices = ({ session }) => get(session, 'user.availableDevices', []);
export const selectUserFetching = ({ session }) => get(session, 'loading', false);
export const selectUserId = ({ session }) => get(session, 'user.id', '');
export const selectUserImage = ({ session }) => get(session, 'user.images[0].url', '');
export const selectUserName = ({ session }) => get(session, 'user.display_name', '');
