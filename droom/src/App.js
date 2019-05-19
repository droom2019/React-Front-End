import React from 'react';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Route } from 'react-router-dom';
import PrivateRoute from './Comp/PrivateRoute';
import Navigation from './Comp/Navigation';
import Home from './Comp/Home';
import About from './Comp/About';
import Register from './Comp/Register';
import CompanySignUp from './Comp/CompanySignUp';
import JobSeekerSignUp from './Comp/JobSeekerSignUp';
import Login from './Comp/Login';
import Team from './Comp/Team';
import CompanyView from './Comp/CompanyView';
import JobSeekerView from './Comp/JobSeekerView';
import Messages from './Comp/Messages';
import Matches from './Comp/Matches';



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
        <Route path="/companyview" component={CompanyView} />
        <Route path="/jobseekerview" component={JobSeekerView} />
        <Route path="/messages" component={Messages} />
        <Route path="/matches" component={Matches} />
    </div>
    );
  }

export default App;
