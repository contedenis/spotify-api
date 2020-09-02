// @own
import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

describe('session actions', () => {
  it('should create an action to init login process', () => {
    const stateKey = 'state_key';
    const state = 'state';
    const expectedAction = {
      type: actionTypes.INIT_LOGIN_PROCESS,
      payload: {
        stateKey,
        state,
      },
    };

    expect(actions.initLoginProcess({ state, stateKey })).toEqual(expectedAction);
  });

  it('should create an action to end login process', () => {
    const stateKey = 'state_key';
    const hash = '1JLDNKS9SKGAS2';
    const expectedAction = {
      type: actionTypes.END_LOGIN_PROCESS,
      payload: {
        stateKey,
        hash,
      },
    };

    expect(actions.endLoginProcess({ hash, stateKey })).toEqual(expectedAction);
  });

  it('should create an action to login success', () => {
    const expectedAction = {
      type: actionTypes.LOGIN_SUCCESS,
    };

    expect(actions.loginSuccess()).toEqual(expectedAction);
  });

  it('should create an action to login fail', () => {
    const errorMessage = 'Error message';

    const expectedAction = {
      type: actionTypes.LOGIN_FAIL,
      payload: {
        errorMessage,
      },
    };

    expect(actions.loginFail({ errorMessage })).toEqual(expectedAction);
  });

  it('initLogoutProcess - Should dispatch an action to init logout', () => {
    const payloadAction = {
      key: 'token',
      onLogout: jest.fn(),
    };
    const expectedAction = {
      type: actionTypes.INIT_LOGOUT_PROCESS,
      payload: payloadAction,
    };

    expect(actions.initLogoutProcess(payloadAction)).toEqual(expectedAction);
  });

  it('logoutFail - Should dispatch an action to logout fail', () => {
    const payloadAction = {
      errorMessage: 'ErrorMessage',
    };
    const expectedAction = {
      type: actionTypes.LOGOUT_FAIL,
      payload: payloadAction,
    };

    expect(actions.logoutFail(payloadAction)).toEqual(expectedAction);
  });

  it('logoutSuccess - Should dispatch an action to logout success', () => {
    const expectedAction = {
      type: actionTypes.LOGOUT_SUCCESS,
    };

    expect(actions.logoutSuccess()).toEqual(expectedAction);
  });

  it('getUser - Should dispatch an action to get user', () => {
    const payloadAction = {
      token: 'token',
    };
    const expectedAction = {
      type: actionTypes.GET_USER,
      payload: payloadAction,
    };

    expect(actions.getUser(payloadAction)).toEqual(expectedAction);
  });

  it('getUserFail - Should dispatch an action to get user fail', () => {
    const payloadAction = {
      errorMessage: 'ErrorMessage',
    };
    const expectedAction = {
      type: actionTypes.GET_USER_FAIL,
      payload: payloadAction,
    };

    expect(actions.getUserFail(payloadAction)).toEqual(expectedAction);
  });

  it('getUserSuccess - Should dispatch an action to get user success', () => {
    const payloadAction = {
      user: 'user',
    };
    const expectedAction = {
      type: actionTypes.GET_USER_SUCCESS,
      payload: payloadAction,
    };

    expect(actions.getUserSuccess(payloadAction)).toEqual(expectedAction);
  });

  it('getAvailableDevices - Should dispatch an action to get available devices', () => {
    const payloadAction = {
      token: 'token',
    };
    const expectedAction = {
      type: actionTypes.GET_AVAILABLE_DEVICES,
      payload: payloadAction,
    };

    expect(actions.getAvailableDevices(payloadAction)).toEqual(expectedAction);
  });

  it('getAvailableDevicesFail - Should dispatch an action to get available devices fail', () => {
    const payloadAction = {
      errorMessage: 'ErrorMessage',
    };
    const expectedAction = {
      type: actionTypes.GET_AVAILABLE_DEVICES_FAIL,
      payload: payloadAction,
    };

    expect(actions.getAvailableDevicesFail(payloadAction)).toEqual(expectedAction);
  });

  it('getAvailableDevicesSuccess - Should dispatch an action to get available devices success', () => {
    const payloadAction = {
      devices: [{ type: 'pc' }, { type: 'notebook' }],
    };
    const expectedAction = {
      type: actionTypes.GET_AVAILABLE_DEVICES_SUCCESS,
      payload: payloadAction,
    };

    expect(actions.getAvailableDevicesSuccess(payloadAction)).toEqual(expectedAction);
  });

  it('setDeviceId - Should dispatch an action to set device id', () => {
    const payloadAction = {
      id: 'deviceId',
    };
    const expectedAction = {
      type: actionTypes.SET_DEVICE_ID,
      payload: payloadAction,
    };

    expect(actions.setDeviceId(payloadAction)).toEqual(expectedAction);
  });

  it('putCurrentDevice - Should dispatch an action to put current device', () => {
    const payloadAction = {
      deviceId: 'deviceId',
    };
    const expectedAction = {
      type: actionTypes.PUT_CURRENT_DEVICE,
      payload: payloadAction,
    };

    expect(actions.putCurrentDevice(payloadAction)).toEqual(expectedAction);
  });

  it('putCurrentDeviceFail - Should dispatch an action to put current device fail', () => {
    const payloadAction = {
      errorMessage: 'ErrorMessage',
    };
    const expectedAction = {
      type: actionTypes.PUT_CURRENT_DEVICE_FAIL,
      payload: payloadAction,
    };

    expect(actions.putCurrentDeviceFail(payloadAction)).toEqual(expectedAction);
  });

  it('putCurrentDeviceSuccess - Should dispatch an action to put current device success', () => {
    const expectedAction = {
      type: actionTypes.PUT_CURRENT_DEVICE_SUCCESS,
    };

    expect(actions.putCurrentDeviceSuccess()).toEqual(expectedAction);
  });
});
