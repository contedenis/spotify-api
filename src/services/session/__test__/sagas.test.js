// @packages
import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

// @own
import {
  initLoginProcessWatcher,
  initLoginProcessWorker,
  endLoginProcessWatcher,
  endLoginProcessWorker,
} from '../sagas';
import {
  END_LOGIN_PROCESS,
  INIT_LOGIN_PROCESS,
} from '../actionTypes';
import {
  loginFail,
  loginSuccess,
} from '../actions';
import {
  AUTHENTICATION_ERROR,
} from '../constants';

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
    const dispatched = [];
    const mockStore = {
      getState: () => ({ sessionState: 'LOGGED_IN' }),
      dispatch: (action) => dispatched.push(action),
    };
    const mockPayload = {
      payload: {
        stateKey: 'spotify_auth_state',
        hash: '#access_token=BQD_8Z2yUughhh1rCSWl3voR6C8e7J-hm00Ov6jsqvd42JbOuSOAxcqRaLVgqZM0dlNzYzxTguu6L9KlhO4eGD4FqHS-0gV2wWU_HqP0Nv5Otjb8eBs4bZE-mJr4gvIzHUSsEIkWZU4Rtrv6k3ISuNqQb5wZN3fy&token_type=Bearer&expires_in=3600&state=8G12dEj4XEWP5e4L',
      },
    };
    localStorage.setItem('spotify_auth_state', '8G12dEj4XEWP5e4L');

    await runSaga(
      mockStore,
      endLoginProcessWorker,
      mockPayload,
    ).done;

    expect(dispatched).toEqual([loginSuccess()]);
  });

  it('sagas login error', async () => {
    const dispatched = [];
    const mockStore = {
      getState: () => ({ sessionState: 'LOGGED_OUT' }),
      dispatch: (action) => dispatched.push(action),
    };
    const mockPayload = {
      payload: {
        stateKey: 'spotify_auth_state',
        hash: '#access_token=BQD_8Z2yUughhh1rCSWl3voR6C8e7J-hm00Ov6jsqvd42JbOuSOAxcqRaLVgqZM0dlNzYzxTguu6L9KlhO4eGD4FqHS-0gV2wWU_HqP0Nv5Otjb8eBs4bZE-mJr4gvIzHUSsEIkWZU4Rtrv6k3ISuNqQb5wZN3fy&token_type=Bearer&expires_in=3600&state=8G12dEj4XEWP5e4L',
      },
    };
    const mockErrorMessage = { errorMessage: AUTHENTICATION_ERROR };

    await runSaga(
      mockStore,
      endLoginProcessWorker,
      mockPayload,
    ).done;

    expect(dispatched).toEqual([loginFail(mockErrorMessage)]);
  });
});
