// @ Packages
import Axios from 'axios';

const URL = {
  development: 'http://localhost:3000',
  production: 'https://spotify-site-api.netlify.app',
};

const createAxiosInstance = () => {
  const instance = Axios.create({
    baseURL: 'https://api.spotify.com/v1',
    timeout: 30000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return instance;
};

const baseUrl = URL[process.env.NODE_ENV];
const spotifyApi = createAxiosInstance();

export {
  baseUrl,
  spotifyApi,
};
