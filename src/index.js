// @packages
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// @app
import './index.css';
import AuthProvider from 'components/Context/Auth';
import Routes from 'components/Routes';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

const { store } = configureStore();
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render((
  <Provider store={store}>
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  </Provider>
), MOUNT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
