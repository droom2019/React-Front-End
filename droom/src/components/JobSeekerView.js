import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import droom from '../assets/images/droom.png';

import JobSeekerMatchesMasterContainer from './JobSeekerMatchesMasterContainer';
import UserDisplayJobSeekerContainer from './UserDisplayJobSeekerContainer';
import SideNavBarUIJobSeeker from './SideNavBarUIJobSeeker';


class JobSeekerView extends React.Component {

  render() {
    return (
        <div>
            <h1>Job Seeker View</h1>
            <div className="jobseekerUIcontainer">
                <JobSeekerMatchesMasterContainer />
                <UserDisplayJobSeekerContainer />
                <SideNavBarUIJobSeeker />
            </div>
        </div>
    );
  }
};

export default JobSeekerView;