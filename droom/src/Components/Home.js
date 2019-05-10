import React from 'react';
import { NavLink } from 'react-router-dom';
import droom from '../assets/images/droom.png';

class Home extends React.Component {
    render() {
      return (
        <div>
          <div className="container">
            <div className="row">
                <div className="col-md-6 box1">
                    <h1 className="content-title title-one">Find Your</h1>
                    <h1 className="content-title title-two">Dream</h1>
                    <h1 className="content-title title-three">Job!</h1>
                    <img
                    className="droomBg"
                    height="450"
                    src={droom}
                    alt="droom"
                    />
                    <img className="droomCta" height="90" src={droom} alt="droom logo" />
                    <div className="row row1 cta-buttons">
                        <NavLink to="/register" className="btn-block signupBtn">
                            SignUp
                        </NavLink>
                    </div>
                    <div className="row row2 cta-buttons">
                        <NavLink to="/login" className="btn-block loginBtn">
                            Login
                        </NavLink>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;