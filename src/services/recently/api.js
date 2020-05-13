// @packages
import { spotifyApi } from 'utils/requestHelper';
import { errorHandler } from 'utils/errorHandler';

export function getRecentlyPlayed() {
  const token = localStorage.getItem('token');
  return spotifyApi({
    url: 'me/player/recently-played',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      type: 'track',
      limit: 50,
    },
  })
    .then(({ data }) => ({ data }))
    .catch(errorHandler);
}
