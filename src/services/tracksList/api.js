// @packages
import { spotifyApi } from 'utils/requestHelper';
import { errorHandler } from 'utils/errorHandler';

export function getTracksList(id, params) {
  const token = localStorage.getItem('token');
  return spotifyApi({
    url: `albums/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  })
    .then(({ data }) => data)
    .catch(errorHandler);
}

export function getPlaylistTracks(id, params) {
  const token = localStorage.getItem('token');
  return spotifyApi({
    url: `playlists/${id}/tracks`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      fields: 'items(track(artists,id,name,uri)),limit,offset,total',
      ...params,
    },
  })
    .then(({ data }) => data)
    .catch(errorHandler);
}
