// @own
import reducer from '../reducer';
import * as actionTypes from '../actionTypes';
import { FAIL, LOGGED_IN, LOGGED_OUT } from '../constants';

describe('session reducer', () => {
  const initialState = {
    sessionState: LOGGED_OUT,
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      sessionState: LOGGED_OUT,
    });
  });

  it('should handle INIT_LOGIN_PROCESS', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.INIT_LOGIN_PROCESS,
      }),
    ).toEqual({
      sessionState: LOGGED_OUT,
    });
  });

  it('should handle END_LOGIN_PROCESS', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.END_LOGIN_PROCESS,
      }),
    ).toEqual({
      sessionState: LOGGED_OUT,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.LOGIN_SUCCESS,
      }),
    ).toEqual({
      sessionState: LOGGED_IN,
    });
  });

  it('should handle LOGIN_FAIL', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.LOGIN_FAIL,
        payload: {
          sessionState: FAIL,
          errorMessage: 'Error message',
        },
      }),
    ).toEqual({
      sessionState: FAIL,
      errorMessage: 'Error message',
    });
  });
});
