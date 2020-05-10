// @ Packages
import Axios from 'axios';

const token = localStorage.getItem('token');

const buildHeaders = () => {
  let headers = {};
  if (token) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  }
  return headers;
};

const createAxiosInstance = () => {
  const instance = Axios.create({
    baseURL: 'https://api.spotify.com/v1',
    timeout: 30000,
    headers: buildHeaders(),
  });
  return instance;
};

const spotifyApi = createAxiosInstance();

export { spotifyApi };
