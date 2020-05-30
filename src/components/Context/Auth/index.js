// @packages
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @app
import useSpotifySDK from 'hooks/useSpotifySDK';
import {
  getAvailableDevices,
  getUser,
  loginSuccess,
  setDeviceId,
} from 'services/session/actions';

export const AuthContext = createContext(null);

const initialAuthStatus = false;

function AuthProvider(props) {
  const [authStatus, setAuthStatus] = useState(initialAuthStatus);
  const {
    getAvailableDevices: getAvailableDevicesAction,
    getUser: getUserAction,
    loginSuccess: loginSuccessAction,
    setDeviceId: setDeviceIdAction,
  } = props;
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      loginSuccessAction();
      getUserAction({ token });
      getAvailableDevicesAction({ token });
      setAuthStatus(true);
    }
  }, [token]);

  const deviceId = useSpotifySDK({ token });

  useEffect(() => {
    if (deviceId) {
      setDeviceIdAction({ id: deviceId });
    }
  }, [deviceId]);

  const onLogout = () => setAuthStatus(initialAuthStatus);
  const onLogin = (newAuthStatus) => setAuthStatus(newAuthStatus);
  const authValue = {
    authStatus,
    onLogin,
    onLogout,
  };

  return <AuthContext.Provider value={{ ...authValue }} {...props} />;
}

AuthProvider.propTypes = {
  getAvailableDevices: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  setDeviceId: PropTypes.func.isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
const actions = {
  getAvailableDevices,
  getUser,
  loginSuccess,
  setDeviceId,
};

export default connect(null, actions)(AuthProvider);
