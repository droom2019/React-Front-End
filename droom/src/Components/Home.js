import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import droomLogoTrans from '../assets/images/droomtrans.png';
import { LoginButton } from '../StyledComponents';

class Home extends React.Component {
    render() {

        return (
            <div className="homeContainer">
                <div className="homeHeader">
                    <h1>Find your dream job. </h1>
                    <h1></h1>
                    <div className ="swipe">
                        <h1>JUST SWIPE.</h1>
                    </div>
                    </div>
                <div className="imgContainer">
                    <img className="" src={droomLogoTrans} alt="droom logo transparent" />
                    </div>
                <div className="homeBtnsContainer">
                    <LoginButton>Register</LoginButton>
                    <LoginButton>Log In</LoginButton>
                    </div>
                </div>
                )
            }
};

export default Home;