import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import profileDemoPicture from '../assets/images/profileDemoPicture.png';


class UserDisplayCompanyContainer extends React.Component {

  render() {
    return (
      <div className="userDisplayContainer">
          <h1>Potential Job Seekers Available</h1>
          <h1>Listings: </h1>
          <img
            className="demoProfilePics"
            src={profileDemoPicture}
            alt="demoProfilePicture"
        />
      </div>
    );
  }
};

export default UserDisplayCompanyContainer;