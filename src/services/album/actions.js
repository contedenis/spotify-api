// @own
import {
  GET_ALBUM,
  GET_ALBUM_FAIL,
  GET_ALBUM_SUCCESS,
} from './actionTypes';

function getAlbum({ id }) {
  return {
    type: GET_ALBUM,
    payload: {
      id,
    },
  };
}

function getAlbumFail({ errorMessage }) {
  return {
    type: GET_ALBUM_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function getAlbumSuccess({ album }) {
  return {
    type: GET_ALBUM_SUCCESS,
    payload: {
      album,
    },
  };
}

export {
  getAlbum,
  getAlbumFail,
  getAlbumSuccess,
};
