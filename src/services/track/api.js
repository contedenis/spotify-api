// @packages
import { spotifyApi } from 'utils/requestHelper';
// import { errorHandler } from 'utils/errorHandler';

export function getTrack(trackId) {
  const token = localStorage.getItem('token');
  return spotifyApi({
    url: `tracks/${trackId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => ({ data }))
    .catch((error) => console.log(error));
}
