import React from 'react';
import logo from './logo.svg';
import './App.css';
import {hot} from 'react-hot-loader';
import styled from 'styled-components'
import Error404 from './Error404';

function App() {
  const Something = styled.h1`
    color: red;
  `
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Something>TEST</Something>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={require("./logo.svg")}></img>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
