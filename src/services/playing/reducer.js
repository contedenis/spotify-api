// @own
import {
  PUT_PLAY,
  PUT_PLAY_FAIL,
  PUT_PLAY_SUCCESS,
} from './actionTypes';

const initialState = {
  errorMessage: null,
  loading: false,
  status: null,
  trackId: null,
  trackName: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case PUT_PLAY:
      return {
        ...state,
        loading: true,
        trackId: payload.trackId,
        trackName: payload.trackName,
      };
    case PUT_PLAY_FAIL:
      return {
        ...state,
        errorMessage: payload.errorMessage,
        loading: false,
        status: 'error',
      };
    case PUT_PLAY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: 'playing',
      };
    default:
      return state;
  }
}
