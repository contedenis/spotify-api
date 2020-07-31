// @packages
import { spotifyApi } from 'utils/requestHelper';
// import { errorHandler } from 'utils/errorHandler';

export function putPlay(contextUri, trackNumber) {
  const token = localStorage.getItem('token');
  return spotifyApi({
    url: 'me/player/play',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'PUT',
    data: {
      context_uri: contextUri,
      offset: {
        position: trackNumber - 1,
      },
      position_ms: 0,
    },
  })
    .then(({ data }) => ({ data }))
    .catch((error) => console.log(error));
}
