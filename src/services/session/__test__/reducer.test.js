// @own
import reducer from '../reducer';
import * as actionTypes from '../actionTypes';
import { FAIL, LOGGED_IN, LOGGED_OUT } from '../constants';

describe('session reducer', () => {
  const initialState = {
    availableDevices: [],
    deviceId: null,
    loading: false,
    sessionState: LOGGED_OUT,
    user: {},
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      availableDevices: [],
      deviceId: null,
      loading: false,
      sessionState: LOGGED_OUT,
      user: {},
    });
  });

  it('should handle INIT_LOGIN_PROCESS', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.INIT_LOGIN_PROCESS,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
      sessionState: LOGGED_OUT,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.LOGIN_SUCCESS,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
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
      ...initialState,
      loading: false,
      sessionState: FAIL,
      errorMessage: 'Error message',
    });
  });

  it('should handle LOGOUT_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.LOGOUT_SUCCESS,
      }),
    ).toEqual({
      ...initialState,
      sessionState: LOGGED_OUT,
      loading: false,
    });
  });

  it('should handle LOGOUT_FAIL', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.LOGOUT_FAIL,
        payload: {
          errorMessage: 'Error message',
        },
      }),
    ).toEqual({
      ...initialState,
      sessionState: FAIL,
      loading: false,
      errorMessage: 'Error message',
    });
  });

  it('should handle GET_USER', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.GET_USER,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle GET_USER_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.GET_USER_SUCCESS,
        payload: {
          user: 'user',
        },
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      user: 'user',
    });
  });

  it('should handle GET_USER_FAIL', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.GET_USER_FAIL,
        payload: {
          errorMessage: 'Error message',
        },
      }),
    ).toEqual({
      ...initialState,
      errorMessage: 'Error message',
      loading: false,
    });
  });

  it('should handle GET_AVAILABLE_DEVICES', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.GET_AVAILABLE_DEVICES,
      }),
    ).toEqual({
      ...initialState,
    });
  });

  it('should handle GET_AVAILABLE_DEVICES_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.GET_AVAILABLE_DEVICES_SUCCESS,
        payload: {
          devices: [{ type: 'pc' }, { type: 'notebook' }],
        },
      }),
    ).toEqual({
      ...initialState,
      availableDevices: [{ type: 'pc' }, { type: 'notebook' }],
    });
  });

  it('should handle GET_AVAILABLE_DEVICES_FAIL', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.GET_AVAILABLE_DEVICES_FAIL,
        payload: {
          errorMessage: 'Error message',
        },
      }),
    ).toEqual({
      ...initialState,
      errorMessage: 'Error message',
    });
  });

  it('should handle SET_DEVICE_ID', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_DEVICE_ID,
        payload: {
          id: 'deviceId',
        },
      }),
    ).toEqual({
      ...initialState,
      deviceId: 'deviceId',
    });
  });
});
