import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import profileDemoPicture from '../assets/images/profileDemoPicture.png';


class JobSeekerProfile extends React.Component {

  render() {
    return (
    <div className="userDisplayContainer">
        <h1>Job Seeker Profile</h1>
            <h2>First Name</h2>
            <h2>Last Name</h2>
            <img
            className="demoProfilePics"
            height="300"
            src={profileDemoPicture}
            alt="demoProfilePicture"
        />

      </div>
    );
  }
};

export default JobSeekerProfile;