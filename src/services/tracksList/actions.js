// @own
import {
  CLEAN_TRACKSLIST,
  GET_PLAYLIST_TRACKS,
  GET_PLAYLIST_TRACKS_FAIL,
  GET_PLAYLIST_TRACKS_SUCCESS,
  GET_TRACKSLIST,
  GET_TRACKSLIST_FAIL,
  GET_TRACKSLIST_SUCCESS,
} from './actionTypes';

function getTracksList({ id, nextPage, params }) {
  return {
    type: GET_TRACKSLIST,
    payload: {
      id,
      nextPage,
      params,
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

function getTracksListSuccess({ tracksList, nextPage }) {
  return {
    type: GET_TRACKSLIST_SUCCESS,
    payload: {
      tracksList,
      nextPage,
    },
  };
}

function getPlaylistTracks({ id, nextPage, params }) {
  return {
    type: GET_PLAYLIST_TRACKS,
    payload: {
      id,
      nextPage,
      params,
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

function getPlaylistTracksSuccess({ tracksList, nextPage }) {
  return {
    type: GET_PLAYLIST_TRACKS_SUCCESS,
    payload: {
      tracksList,
      nextPage,
    },
  };
}

function cleanTracksList() {
  return {
    type: CLEAN_TRACKSLIST,
  };
}

export {
  cleanTracksList,
  getTracksList,
  getTracksListFail,
  getTracksListSuccess,
  getPlaylistTracks,
  getPlaylistTracksFail,
  getPlaylistTracksSuccess,
};
