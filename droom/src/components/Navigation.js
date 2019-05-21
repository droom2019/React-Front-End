import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
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
        <nav class="navbar navbar-expand-lg navbar-dark primary-color">
        
          <div>
            <NavLink to="/home/" activeClassName="activeNav">Home</NavLink>
          </div>
          <div>
            <NavLink to="/about/" activeClassName="activeNav">About</NavLink>
          </div>

          {/* <div>
            <MDBDropdown className="registerButton">
              <MDBDropdownToggle caret color="primary">
                REGISTER
              </MDBDropdownToggle>
              <MDBDropdownMenu  basic >
                <MDBDropdownItem><NavLink to="/companysignup/" activeClassName="activeNav" class="dropdown-item" >Company</NavLink></MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem><NavLink to="/jobseekersignup/" activeClassName="activeNav" class="dropdown-item" >Job Seeker</NavLink></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            </div> */}
          <div>
            <NavLink to="/register/" activeClassName="activeNav">Register</NavLink>
          </div>

          <div>
            <NavLink to="/login/" activeClassName="activeNav">Login</NavLink>
          </div>
          <div>
            <NavLink to="/team/" activeClassName="activeNav">Team</NavLink>
          </div>
          {/* <div>
            <NavLink to="/jobseekerview/" activeClassName="activeNav">Job Seeker View</NavLink>
          </div>
          <div>
            <NavLink to="/companyview/" activeClassName="activeNav">Company View</NavLink>
          </div> */}
          </nav>
        </div>
    );
  }
};

export default Navigation;
