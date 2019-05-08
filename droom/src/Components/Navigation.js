import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <h1>Droom</h1>
      <div className="nav-bar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about/">About</Link>
        </div>
        <div>
          <Link to="/signup/">Sign Up</Link>
        </div>
        <div>
          <Link to="/login/">Login</Link>
        </div>
        <div>
          <Link to="/team/">Team</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
