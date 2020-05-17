// @packages
import { get } from 'lodash';

export const selectAlbum = ({ album }) => get(album, 'album', {});
export const selectAlbumLoading = ({ album }) => get(album, 'loading', false);
