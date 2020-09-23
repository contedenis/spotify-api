// @packages
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @app
import useSpotifySDK from 'hooks/useSpotifySDK';
import { loginSuccess, setDeviceId, initLogoutProcess } from 'services/session/actions';
import { selectAuthError } from 'services/authError/selectors';

export const AuthContext = createContext(null);

const initialAuthStatus = false;

function AuthProvider(props) {
  const [authStatus, setAuthStatus] = useState(initialAuthStatus);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const authError = useSelector(selectAuthError);

  useLayoutEffect(() => {
    if (token) {
      dispatch(loginSuccess());
      setAuthStatus(true);
    }
  }, [token, dispatch]);

  const deviceId = useSpotifySDK({ token });

  useEffect(() => {
    if (deviceId) {
      dispatch(setDeviceId({ id: deviceId }));
    }
  }, [deviceId, dispatch]);

  const onLogout = () => setAuthStatus(initialAuthStatus);
  const onLogin = (newAuthStatus) => setAuthStatus(newAuthStatus);
  const authValue = {
    authStatus,
    onLogin,
    onLogout,
  };

  useEffect(() => {
    if (authError) {
      dispatch(initLogoutProcess({ key: 'token', onLogout }));
    }
  }, [authError, dispatch]);

  return <AuthContext.Provider value={{ ...authValue }} {...props} />;
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
