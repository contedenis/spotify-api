// @own
import {
  SET_AUTH_ERROR,
  RESET_AUTH_ERROR,
} from './actionTypes';

const initialState = {
  status: false,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTH_ERROR:
      return {
        ...state,
        status: payload.status,
      };
    case RESET_AUTH_ERROR:
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
}
