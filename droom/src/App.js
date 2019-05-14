import React from 'react';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import CompanySignUp from './components/CompanySignUp';
import JobSeekerSignUp from './components/JobSeekerSignUp';
import Login from './components/Login';
import Team from './components/Team';


function App() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/companysignup" component={CompanySignUp} />
        <Route path="/jobseekersignup" component={JobSeekerSignUp} />
        <Route path="/login" component={Login} />
        <Route path="/team" component={Team} />
    </div>
    );
  }

export default App;
