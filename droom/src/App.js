import React from 'react';
import './App.css';
import { Home, About, SignUp, Login, Team, Navigation } from './Components/Index';
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/team" component={Team} />
  </div>
);

export default App;
