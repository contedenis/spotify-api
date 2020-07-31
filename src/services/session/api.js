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

export function putCurrentDevice(deviceId) {
  const token = localStorage.getItem('token');
  return spotifyApi({
    url: 'me/player',
    method: 'put',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      device_ids: [
        deviceId,
      ],
    },
  })
    .then(({ data }) => data.devices)
    .catch(errorHandler);
}
