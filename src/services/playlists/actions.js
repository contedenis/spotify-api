// @own
import {
  GET_PLAYLISTS,
  GET_PLAYLISTS_FAIL,
  GET_PLAYLISTS_SUCCESS,
} from './actionTypes';

function getPlaylists({ params }) {
  return {
    type: GET_PLAYLISTS,
    payload: {
      params,
    },
  };
}

function getPlaylistsFail({ errorMessage }) {
  return {
    type: GET_PLAYLISTS_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function getPlaylistsSuccess({ list }) {
  return {
    type: GET_PLAYLISTS_SUCCESS,
    payload: {
      list,
    },
  };
}

export {
  getPlaylists,
  getPlaylistsFail,
  getPlaylistsSuccess,
};
