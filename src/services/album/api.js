// @packages
import { spotifyApi } from 'utils/requestHelper';
import { errorHandler } from 'utils/errorHandler';

export function getAlbum(id) {
  const token = localStorage.getItem('token');
  return spotifyApi({
    url: `albums/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => data)
    .catch(errorHandler);
}
