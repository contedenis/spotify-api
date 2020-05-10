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
import { getUser, loginSuccess } from 'services/session/actions';

export const AuthContext = createContext(null);

const initialAuthStatus = false;

function AuthProvider(props) {
  const [authStatus, setAuthStatus] = useState(initialAuthStatus);
  const { getUser: getUserAction, loginSuccess: loginSuccessAction } = props;

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      loginSuccessAction();
      getUserAction({ token });
      setAuthStatus(true);
    }
  }, []);

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
  getUser: PropTypes.func.isRequired,
  loginSuccess: PropTypes.func.isRequired,
};

export const useAuthContext = () => useContext(AuthContext);

export default connect(null, { getUser, loginSuccess })(AuthProvider);
