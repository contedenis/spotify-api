// @own
import {
  GET_TRACK,
  GET_TRACK_FAIL,
  GET_TRACK_SUCCESS,
} from './actionTypes';

const initialState = {
  data: null,
  errorMessage: null,
  loading: false,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_TRACK:
      return {
        ...state,
        loading: true,
      };
    case GET_TRACK_FAIL:
      return {
        ...state,
        errorMessage: payload.errorMessage,
        loading: false,
      };
    case GET_TRACK_SUCCESS:
      return {
        ...state,
        data: payload.track,
      };
    default:
      return state;
  }
}
