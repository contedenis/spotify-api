// @own
import {
  GET_PLAYLISTS,
  GET_PLAYLISTS_FAIL,
  GET_PLAYLISTS_SUCCESS,
} from './actionTypes';

const initialState = {
  errorMessage: null,
  list: [],
  loading: false,
};

function removeEmpty(payload) {
  return payload.reduce((acc, actualItem) => {
    if (actualItem.tracks.total > 0) {
      acc.push(actualItem);
    }
    return acc;
  }, []);
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PLAYLISTS:
      return {
        ...state,
        loading: true,
      };
    case GET_PLAYLISTS_FAIL:
      return {
        ...state,
        errorMessage: payload.errorMessage,
        loading: false,
      };
    case GET_PLAYLISTS_SUCCESS:
      return {
        ...state,
        list: removeEmpty(payload.list),
        loading: false,
      };
    default:
      return state;
  }
}
