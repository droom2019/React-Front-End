import React from 'react';
import { Link } from 'react-router-dom';
import droom from '../assets/images/droom.png';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <img
                    className="droomBg"
                    height="200"
                    src={droom}
                    alt="droom"
        />
        <div className="nav-bar">
          <div>
            <Link to="/home/">Home</Link>
          </div>
          <div>
            <Link to="/about/">About</Link>
          </div>
          <div>
            <Link to="/register/">Register</Link>
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
  }
};

export default Navigation;
