import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import swipeTrans from '../assets/images/swipeTrans.png';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { LoginButton } from '../StyledComponents';

class Account extends React.Component {
    render() {

        return (
            <div className="homeContainer">
                <div className="homeHeader">
                    <h1>Are you: </h1>
                <div className="homeBtnsContainer">
                    <div className="registerButtons">
                        <LoginButton>
                            <NavLink to="/companysignup/" activeClassName="activeNav" class="dropdown-item" >Looking to post jobs</NavLink>
                        </LoginButton>

                        <LoginButton>
                        <NavLink to="/jobseekersignup/" activeClassName="activeNav" class="dropdown-item" >Looking for a job</NavLink>
                        </LoginButton>
                    </div>
                </div>
                </div>
            </div>
                )
            }
};

export default Account;