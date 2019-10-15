import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login.js';
import PrivateRoute from './components/PrivateRoute.js'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h4>Friends List</h4>
        <ul>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path ='/protected' component={Login}/>
          <Route path={'/login'} component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
