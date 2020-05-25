// @own
import {
  GET_TRACKSLIST,
  GET_TRACKSLIST_FAIL,
  GET_TRACKSLIST_SUCCESS,
  GET_PLAYLIST_TRACKS,
  GET_PLAYLIST_TRACKS_FAIL,
  GET_PLAYLIST_TRACKS_SUCCESS,
} from './actionTypes';

function getTracksList({ id }) {
  return {
    type: GET_TRACKSLIST,
    payload: {
      id,
    },
  };
}

function getTracksListFail({ errorMessage }) {
  return {
    type: GET_TRACKSLIST_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function getTracksListSuccess({ tracksList }) {
  return {
    type: GET_TRACKSLIST_SUCCESS,
    payload: {
      tracksList,
    },
  };
}

function getPlaylistTracks({ id }) {
  return {
    type: GET_PLAYLIST_TRACKS,
    payload: {
      id,
    },
  };
}

function getPlaylistTracksFail({ errorMessage }) {
  return {
    type: GET_PLAYLIST_TRACKS_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function getPlaylistTracksSuccess({ tracksList }) {
  return {
    type: GET_PLAYLIST_TRACKS_SUCCESS,
    payload: {
      tracksList,
    },
  };
}

export {
  getTracksList,
  getTracksListFail,
  getTracksListSuccess,
  getPlaylistTracks,
  getPlaylistTracksFail,
  getPlaylistTracksSuccess,
};
