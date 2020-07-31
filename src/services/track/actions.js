// @own
import {
  GET_TRACK,
  GET_TRACK_FAIL,
  GET_TRACK_SUCCESS,
} from './actionTypes';

function getTrack({ trackId }) {
  return {
    type: GET_TRACK,
    payload: {
      trackId,
    },
  };
}

function getTrackFail({ errorMessage }) {
  return {
    type: GET_TRACK_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function getTrackSuccess({ track }) {
  return {
    type: GET_TRACK_SUCCESS,
    payload: {
      track,
    },
  };
}

export {
  getTrack,
  getTrackFail,
  getTrackSuccess,
};
