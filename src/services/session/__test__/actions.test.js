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
      payload: errorMessage,
    };

    expect(actions.loginFail({ errorMessage })).toEqual(expectedAction);
  });
});
