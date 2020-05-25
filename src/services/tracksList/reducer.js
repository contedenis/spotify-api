// @own
import {
  GET_TRACKSLIST,
  GET_TRACKSLIST_FAIL,
  GET_TRACKSLIST_SUCCESS,
  GET_PLAYLIST_TRACKS,
  GET_PLAYLIST_TRACKS_FAIL,
  GET_PLAYLIST_TRACKS_SUCCESS,
} from './actionTypes';

const initialState = {
  errorMessage: null,
  tracksList: {},
  loading: false,
};

function formatTracksList(tracksList) {
  return ({
    images: tracksList.images,
    name: tracksList.name,
    tracks: tracksList.tracks.items,
  });
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_TRACKSLIST:
      return {
        ...state,
        loading: true,
      };
    case GET_TRACKSLIST_FAIL:
      return {
        ...state,
        errorMessage: payload.errorMessage,
        loading: false,
      };
    case GET_TRACKSLIST_SUCCESS:
      return {
        ...state,
        tracksList: formatTracksList(payload.tracksList),
        loading: false,
      };
    case GET_PLAYLIST_TRACKS:
      return {
        ...state,
        loading: true,
      };
    case GET_PLAYLIST_TRACKS_FAIL:
      return {
        ...state,
        errorMessage: payload.errorMessage,
        loading: false,
      };
    case GET_PLAYLIST_TRACKS_SUCCESS:
      return {
        ...state,
        tracksList: formatTracksList(payload.tracksList),
        loading: false,
      };
    default:
      return state;
  }
}
