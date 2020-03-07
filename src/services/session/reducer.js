// @own
import {
  END_LOGIN_PROCESS,
  INIT_LOGIN_PROCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from './actionTypes';
import { FAIL, LOGGED_IN, LOGGED_OUT } from './constants';

const initialState = {
  sessionState: LOGGED_OUT,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case INIT_LOGIN_PROCESS:
    case END_LOGIN_PROCESS:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        sessionState: LOGGED_IN,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        sessionState: FAIL,
        errorMessage: payload.errorMessage,
      };
    default:
      return state;
  }
}