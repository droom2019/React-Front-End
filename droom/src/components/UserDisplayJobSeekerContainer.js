import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import companyDemoPicture from '../assets/images/applelogo.png';


class UserDisplayJobSeekerContainer extends React.Component {

  render() {
    return (
      <div className="userDisplayContainer">
          <h2>Company Jobs You May Like</h2>
          <h1>Listings: </h1>
          <img
            className="demoProfilePics"
            src={companyDemoPicture}
            alt="companyDemoPicture"
        />
      </div>
    );
  }
};

export default UserDisplayJobSeekerContainer;