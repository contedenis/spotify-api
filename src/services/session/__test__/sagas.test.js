// @packages
import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

// @app
import { setAuthError } from 'services/authError/actions';

// @own
import {
  endLoginProcessWatcher,
  endLoginProcessWorker,
  getAvailableDevicesWatcher,
  getAvailableDevicesWorker,
  getUserWatcher,
  getUserWorker,
  initLoginProcessWatcher,
  initLoginProcessWorker,
  initLogoutProcessWatcher,
  initLogoutProcessWorker,
  putCurrentDeviceWatcher,
  putCurrentDeviceWorker,
} from '../sagas';
import {
  END_LOGIN_PROCESS,
  GET_AVAILABLE_DEVICES,
  GET_USER,
  INIT_LOGIN_PROCESS,
  INIT_LOGOUT_PROCESS,
  PUT_CURRENT_DEVICE,
} from '../actionTypes';
import {
  getAvailableDevicesFail,
  getAvailableDevicesSuccess,
  getUser,
  getUserFail,
  getUserSuccess,
  loginFail,
  loginSuccess,
  logoutFail,
  logoutSuccess,
  putCurrentDeviceFail,
  putCurrentDeviceSuccess,
} from '../actions';
import {
  AUTHENTICATION_ERROR,
} from '../constants';
import * as api from '../api';

jest.mock('services/session/api', () => ({
  getUser: jest.fn(),
  getAvailableDevices: jest.fn(),
  putCurrentDevice: jest.fn(),
}));

beforeEach(() => {
  localStorage.clear();
});

function defaultValues() {
  const dispatched = [];
  const mockStore = {
    getState: () => ({
      availableDevices: [],
      deviceId: null,
      loading: false,
      sessionState: 'LOGGED_OUT',
      user: {},
    }),
    dispatch: (action) => dispatched.push(action),
  };

  return { dispatched, mockStore };
}

describe('sagas', () => {
  it('Should fire on INIT_LOGIN_PROCESS', () => {
    const gen = initLoginProcessWatcher();
    const expected = takeLatest(INIT_LOGIN_PROCESS, initLoginProcessWorker);
    const actual = gen.next().value;

    expect(actual).toEqual(expected);
  });

  it('Should fire on END_LOGIN_PROCESS', () => {
    const gen = endLoginProcessWatcher();
    const expected = takeLatest(END_LOGIN_PROCESS, endLoginProcessWorker);
    const actual = gen.next().value;

    expect(actual).toEqual(expected);
  });

  it('sagas login success', async () => {
    const { dispatched, mockStore } = defaultValues();
    const mockPayload = {
      payload: {
        hash: '#access_token=8G12dEj4XEWP5e4L&token_type=Bearer&expires_in=3600&state=8G12dEj4XEWP5e4L',
        onLogin: jest.fn(),
        stateKey: 'spotify_auth_state',
      },
    };
    localStorage.setItem('spotify_auth_state', '8G12dEj4XEWP5e4L');

    await runSaga(
      mockStore,
      endLoginProcessWorker,
      mockPayload,
    ).done;

    expect(dispatched).toEqual([
      loginSuccess(),
      getUser({ token: '8G12dEj4XEWP5e4L' }),
    ]);
  });

  it('sagas login error', async () => {
    const { dispatched, mockStore } = defaultValues();
    const mockPayload = {
      payload: {
        stateKey: 'spotify_auth_state',
        onLogin: jest.fn(),
        hash: '#access_token=8G12dEj4XEWP5e4L&token_type=Bearer&expires_in=3600&state=8G12dEj4XEWP5e4L',
      },
    };
    const mockErrorMessage = { errorMessage: AUTHENTICATION_ERROR };

    await runSaga(
      mockStore,
      endLoginProcessWorker,
      mockPayload,
    ).done;

    expect(dispatched).toEqual([
      loginFail(mockErrorMessage),
      setAuthError({ status: false }),
    ]);
  });

  it('Should fire on INIT_LOGOUT_PROCESS', () => {
    const gen = initLogoutProcessWatcher();
    const expected = takeLatest(INIT_LOGOUT_PROCESS, initLogoutProcessWorker);
    const actual = gen.next().value;

    expect(actual).toEqual(expected);
  });

  it('initLogoutProcess success', async () => {
    const { dispatched, mockStore } = defaultValues();
    const onLogout = jest.fn();
    localStorage.setItem('token', 'token');

    await runSaga(
      mockStore,
      initLogoutProcessWorker,
      {
        payload: {
          key: 'token',
          onLogout,
        },
      },
    ).done;

    expect(onLogout).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([logoutSuccess()]);
  });

  it('initLogoutProcess fail', async () => {
    const { dispatched, mockStore } = defaultValues();
    const onLogout = jest.fn();

    await runSaga(
      mockStore,
      initLogoutProcessWorker,
      {
        payload: {
          key: 'token',
          onLogout,
        },
      },
    ).done;

    expect(onLogout).toHaveBeenCalledTimes(0);
    expect(dispatched).toEqual([
      logoutFail({ errorMessage: 'token was not found' }),
    ]);
  });

  it('Should fire on GET_USER', () => {
    const gen = getUserWatcher();
    const expected = takeLatest(GET_USER, getUserWorker);
    const actual = gen.next().value;

    expect(actual).toEqual(expected);
  });

  it('getUser success', async () => {
    api.getUser.mockImplementation(() => ({ name: 'user' }));
    const { dispatched, mockStore } = defaultValues();

    await runSaga(
      mockStore,
      getUserWorker,
      {
        payload: {
          token: 'token',
        },
      },
    ).done;

    expect(dispatched).toEqual([getUserSuccess({ user: { name: 'user' } })]);
  });

  it('getUser fail', async () => {
    api.getUser.mockImplementation(() => { throw new Error('Error'); });
    const { dispatched, mockStore } = defaultValues();

    await runSaga(
      mockStore,
      getUserWorker,
      {
        payload: {
          token: 'token',
        },
      },
    ).done;

    expect(dispatched).toEqual([
      getUserFail({ errorMessage: 'Error' }),
      setAuthError({ status: false }),
    ]);
  });

  it('Should fire on GET_AVAILABLE_DEVICES', () => {
    const gen = getAvailableDevicesWatcher();
    const expected = takeLatest(GET_AVAILABLE_DEVICES, getAvailableDevicesWorker);
    const actual = gen.next().value;

    expect(actual).toEqual(expected);
  });

  it('getAvailableDevices success', async () => {
    api.getAvailableDevices.mockImplementation(() => (
      [{ type: 'pc' }, { type: 'notebook' }]
    ));
    const { dispatched, mockStore } = defaultValues();

    await runSaga(
      mockStore,
      getAvailableDevicesWorker,
      {
        payload: {
          token: 'token',
        },
      },
    ).done;

    expect(dispatched).toEqual([
      getAvailableDevicesSuccess({ devices: [{ type: 'pc' }, { type: 'notebook' }] }),
    ]);
  });

  it('getAvailableDevices fail', async () => {
    api.getAvailableDevices.mockImplementation(() => { throw new Error('Error'); });
    const { dispatched, mockStore } = defaultValues();

    await runSaga(
      mockStore,
      getAvailableDevicesWorker,
      {
        payload: {
          token: 'token',
        },
      },
    ).done;

    expect(dispatched).toEqual([
      getAvailableDevicesFail({ errorMessage: 'Error' }),
      setAuthError({ status: false }),
    ]);
  });

  it('Should fire on PUT_CURRENT_DEVICE', () => {
    const gen = putCurrentDeviceWatcher();
    const expected = takeLatest(PUT_CURRENT_DEVICE, putCurrentDeviceWorker);
    const actual = gen.next().value;

    expect(actual).toEqual(expected);
  });

  it('putCurrentDevice success', async () => {
    api.putCurrentDevice.mockImplementation(() => ({}));
    const { dispatched, mockStore } = defaultValues();

    await runSaga(
      mockStore,
      putCurrentDeviceWorker,
      {
        payload: {
          deviceId: 'deviceId',
        },
      },
    ).done;

    expect(dispatched).toEqual([putCurrentDeviceSuccess()]);
  });

  it('putCurrentDevice fail', async () => {
    api.putCurrentDevice.mockImplementation(() => { throw new Error('Error'); });
    const { dispatched, mockStore } = defaultValues();

    await runSaga(
      mockStore,
      putCurrentDeviceWorker,
      {
        payload: {
          deviceId: 'deviceId',
        },
      },
    ).done;

    expect(dispatched).toEqual([
      putCurrentDeviceFail({ errorMessage: 'Error' }),
      setAuthError({ status: false }),
    ]);
  });
});
