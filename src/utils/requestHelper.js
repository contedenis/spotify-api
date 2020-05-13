// @ Packages
import Axios from 'axios';

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

const spotifyApi = createAxiosInstance();

export { spotifyApi };
