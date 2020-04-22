// @own
import {
  INIT_LOGIN_PROCESS,
  INIT_LOGOUT_PROCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
} from './actionTypes';
import { FAIL, LOGGED_OUT, LOGGED_IN } from './constants';

const initialState = {
  loading: false,
  sessionState: LOGGED_OUT,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case INIT_LOGIN_PROCESS:
    case INIT_LOGOUT_PROCESS: 
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        sessionState: LOGGED_IN,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        sessionState: FAIL,
        loading: false,
        errorMessage: payload.errorMessage,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        sessionState: LOGGED_OUT,
        loading: false,
      }
    case LOGOUT_FAIL:
      return {
        ...state,
        sessionState: FAIL,
        loading: false,
        errorMessage: payload.errorMessage,
      };
    default:
      return state;
  }
}