// @packages
import { spotifyApi } from 'utils/requestHelper';
import { errorHandler } from 'utils/errorHandler';

export function getRecentlyPlayed() {
  return spotifyApi({
    url: 'me/player/recently-played',
    params: {
      type: 'track',
      limit: 50,
    },
  })
    .then(({ data }) => ({ data }))
    .catch(errorHandler);
}
