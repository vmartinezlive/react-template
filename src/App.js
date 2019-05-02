import React from 'react';
import logo from './logo.svg';
import './App.css';
import {hot} from 'react-hot-loader';
import styled from 'styled-components'
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import { Switch, Route, withRouter } from 'react-router-dom';

function App() {
  const Something = styled.h1`
    color: red;
  `
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
