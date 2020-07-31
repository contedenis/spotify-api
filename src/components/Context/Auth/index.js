// @packages
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';

// @app
import useSpotifySDK from 'hooks/useSpotifySDK';
import { loginSuccess, setDeviceId } from 'services/session/actions';

export const AuthContext = createContext(null);

const initialAuthStatus = false;

function AuthProvider(props) {
  const [authStatus, setAuthStatus] = useState(initialAuthStatus);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(loginSuccess());
      setAuthStatus(true);
    }
  }, [token]);

  const deviceId = useSpotifySDK({ token });

  useEffect(() => {
    if (deviceId) {
      dispatch(setDeviceId({ id: deviceId }));
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

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
