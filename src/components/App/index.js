// @packages
import React from 'react';

// @app
import logo from 'assets/images/logo.svg';

// @own
import {
  AStyled,
  AppStyled,
  HeaderStyled,
  ImageStyled,
} from './styles';
import './styles.css';


function App() {
  return (
    <AppStyled>
      <HeaderStyled>
        <ImageStyled src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AStyled
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AStyled>
      </HeaderStyled>
    </AppStyled>
  );
}

export default App;
