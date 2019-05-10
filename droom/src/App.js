import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Team from './components/Team';


class App extends Component {
  componentDidMount() {
    console.log("mounted");
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/reg" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/team" component={Team} />
    </div>
    );
  }
}

export default App;
