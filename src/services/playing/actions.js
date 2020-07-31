// @own
import {
  PUT_PLAY,
  PUT_PLAY_FAIL,
  PUT_PLAY_SUCCESS,
} from './actionTypes';

function putPlay({ trackId, trackNumber }) {
  return {
    type: PUT_PLAY,
    payload: {
      trackId,
      trackNumber,
    },
  };
}

function putPlayFail({ errorMessage }) {
  return {
    type: PUT_PLAY_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function putPlaySuccess({ response }) {
  return {
    type: PUT_PLAY_SUCCESS,
    payload: {
      response,
    },
  };
}

export {
  putPlay,
  putPlayFail,
  putPlaySuccess,
};
