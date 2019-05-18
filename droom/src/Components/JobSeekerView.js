import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import droom from '../assets/images/droom.png';

import MatchesMasterContainer from './MatchesMasterContainer';
import UserDisplayContainer from './UserDisplayContainer';
import SideNavBarUI from './SideNavBarUI';


class JobSeekerView extends React.Component {

  render() {
    return (
        <div>
            <h1>Job Seeker View</h1>
            <div className="jobseekerUIcontainer">
                <MatchesMasterContainer />
                <UserDisplayContainer />
                <SideNavBarUI />
            </div>
        </div>
    );
  }
};

export default JobSeekerView;