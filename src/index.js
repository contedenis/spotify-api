// @packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// @app
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const MOUNT_NODE = document.getElementById('root');
ReactDOM.render((
  <Router>
    <App />
  </Router>
), MOUNT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
