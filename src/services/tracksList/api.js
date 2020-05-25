// @packages
import { spotifyApi } from 'utils/requestHelper';
import { errorHandler } from 'utils/errorHandler';

export function getTracksList(id) {
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

export function getPlaylistTracks(id) {
  const token = localStorage.getItem('token');
  return spotifyApi({
    url: `playlists/${id}/tracks`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      fields: 'items(track(artists,id,name,uri))',
    },
  })
    .then(({ data }) => data)
    .catch(errorHandler);
}
