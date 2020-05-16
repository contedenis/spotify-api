// @packages
import { spotifyApi } from 'utils/requestHelper';
import { errorHandler } from 'utils/errorHandler';

export function getPlaylists(params) {
  const token = localStorage.getItem('token');
  return spotifyApi({
    url: '/me/playlists',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  })
    .then(({ data }) => data)
    .catch(errorHandler);
}
