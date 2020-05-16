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
        list: payload.list,
        loading: false,
      };
    default:
      return state;
  }
}
