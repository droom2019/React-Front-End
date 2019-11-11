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
import Account from './components/Account';
import Team from './components/Team';
import CompanyProfile from './components/CompanyProfile';
import JobSeekerProfile from './components/JobSeekerProfile';
import CompanyView from './components/CompanyView';
import JobSeekerView from './components/JobSeekerView';
import Messages from './components/Messages';
import CompanyMatches from './components/CompanyMatches';
import JobSeekerMatchesMasterContainer from './components/JobSeekerMatchesMasterContainer';



function App() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/companysignup" component={CompanySignUp} />
        <Route path="/jobseekersignup" component={JobSeekerSignUp} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
        <Route path="/team" component={Team} />
        <Route path="/companyprofile" component={CompanyProfile} />
        <Route path="/jobseekerprofile" component={JobSeekerProfile} />
        <Route path="/companyview" component={CompanyView} />
        <Route path="/jobseekerview" component={JobSeekerView} />
        <Route path="/messages" component={Messages} />
        <Route path="/companymatches" component={CompanyMatches} />
        <Route path="/jobseekermatches" component={JobSeekerMatchesMasterContainer} />
    </div>
    );
  }

export default App;
