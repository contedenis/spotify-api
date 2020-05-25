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

const initialState = {
  errorMessage: null,
  tracksList: {},
  loading: false,
};

function formatTracksList(payload, state) {
  const { tracksList, nextPage } = payload;
  return ({
    images: tracksList.images,
    name: tracksList.name,
    total: tracksList.total,
    offset: tracksList.offset,
    tracks: nextPage
      ? state.tracks.concat(tracksList.tracks.items)
      : tracksList.tracks.items,
  });
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_TRACKSLIST:
      return {
        ...state,
        loading: !payload.nextPage,
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
        tracksList: formatTracksList(payload, state.tracksList),
        loading: false,
      };
    case GET_PLAYLIST_TRACKS:
      return {
        ...state,
        loading: !payload.nextPage,
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
        tracksList: formatTracksList(payload, state.tracksList),
        loading: false,
      };
    case CLEAN_TRACKSLIST:
      return {
        ...state,
        tracksList: {},
      };
    default:
      return state;
  }
}
