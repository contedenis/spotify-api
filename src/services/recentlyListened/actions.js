// @own
import {
  GET_RECENTLY_LISTENED,
  GET_RECENTLY_LISTENED_FAIL,
  GET_RECENTLY_LISTENED_SUCCESS,
} from './actionTypes';

function getRecentlyListened({ params }) {
  return {
    type: GET_RECENTLY_LISTENED,
    payload: {
      params,
    },
  };
}

function getRecentlyListenedFail({ errorMessage }) {
  return {
    type: GET_RECENTLY_LISTENED_FAIL,
    payload: {
      errorMessage,
    },
  };
}

function getRecentlyListenedSuccess({ list }) {
  return {
    type: GET_RECENTLY_LISTENED_SUCCESS,
    payload: {
      list,
    },
  };
}

export {
  getRecentlyListened,
  getRecentlyListenedFail,
  getRecentlyListenedSuccess,
};
