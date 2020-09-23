import {
  SET_AUTH_ERROR,
  RESET_AUTH_ERROR,
} from './actionTypes';

export function setAuthError({ status }) {
  return {
    type: SET_AUTH_ERROR,
    payload: {
      status,
    },
  };
}

export function resetAuthError() {
  return {
    type: RESET_AUTH_ERROR,
  };
}
