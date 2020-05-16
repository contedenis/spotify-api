// @packages
import { spotifyApi } from 'utils/requestHelper';
import { errorHandler } from 'utils/errorHandler';

export function getRecentlyListened(params) {
  const token = localStorage.getItem('token');
  return spotifyApi({
    url: 'me/player/recently-played',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  })
    .then(({ data }) => data)
    .catch(errorHandler);
}
