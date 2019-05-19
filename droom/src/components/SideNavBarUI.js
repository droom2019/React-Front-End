import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import droom from '../assets/images/droom.png';


class SideNavBarUI extends React.Component {

    render() {
    return (
        <div className="sideNavContainer">
            <div>
                <NavLink to="/profile/" activeClassName="activeNav">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/matches/" activeClassName="activeNav">Matches</NavLink>
            </div>
            <div>
                <NavLink to="/messages/" activeClassName="activeNav">Messages</NavLink>
            </div>
            <MDBDropdownItem divider />
            <div>
                <NavLink to="/signout/" activeClassName="activeNav">Sign Out</NavLink>
            </div>
        </div>
        );
    }
};

export default SideNavBarUI;