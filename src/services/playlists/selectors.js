// @packages
import { get } from 'lodash';

export const selectPlaylists = ({ playlists }) => get(playlists, 'list', []);
export const selectPlaylistsLoading = ({ playlists }) => get(playlists, 'loading', false);
