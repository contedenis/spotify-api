// @packages
import { spotifyApi } from 'utils/requestHelper';
import { errorHandler } from 'utils/errorHandler';

export function getUser(token) {
  return spotifyApi({
    url: 'me',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => data);
}

export function getAvailableDevices(token) {
  return spotifyApi({
    url: 'me/player/devices',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => data.devices)
    .catch(errorHandler);
}
