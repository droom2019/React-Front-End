import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import swipeTrans from '../assets/images/swipeTrans.png';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
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
                    <img className="" src={swipeTrans} height="200" alt="swipe transparent" />
                </div>

                <div className="homeBtnsContainer">
                    <div>
                    <NavLink to="/register/" activeClassName="activeNav"><LoginButton>Register</LoginButton></NavLink>
                    </div>
                    <div>
                    <NavLink to="/login/" activeClassName="activeNav"><LoginButton>Log In</LoginButton></NavLink>
                    </div>
                </div>
            </div>
                )
            }
};

export default Home;