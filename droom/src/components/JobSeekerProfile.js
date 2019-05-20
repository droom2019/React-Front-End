import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import profileDemoPicture from '../assets/images/profileDemoPicture.png';
import MatchesMasterContainer from './MatchesMasterContainer';
import SideNavBarUIJobSeeker from './SideNavBarUIJobSeeker';
import { getSeekerById } from '../actions';
import jwt from "jwt-decode";


class JobSeekerProfile extends React.Component {
  state = {}

  componentDidMount() {
    const id = jwt(localStorage.getItem("token"))
    this.props.getSeekerById(id.subject);

  }
  render() {

    console.log(this.props);
    console.log(this.props.seekers);

    return (
      <div>
        <h1>Job Seeker View</h1>
        <div className="jobseekerUIcontainer">
          <MatchesMasterContainer />
          
          <div className="userDisplayContainer">
            <h1>Job Seeker Profile</h1>

            <div className="userNameContainer">
              <div>
                <h3>First Name:</h3>
                <h2>{this.props.seekers.firstName}</h2>
              </div>
              <div>
                <h3>Last Name:</h3>
                <h2>{this.props.seekers.lastName}</h2>
              </div>
            </div>

            <img
            className="profilePicture"
            src={this.props.seekers.profilePicture}
            alt="profilePicture"
            />

            <h2>Date of Birth:</h2>
            <h5>{this.props.seekers.month}/ {this.props.seekers.day}/ {this.props.seekers.year}</h5>

            <h3>Country:</h3>
            <h5>{this.props.seekers.country}</h5>

            <h3>State:</h3>
            <h5>{this.props.seekers.state}</h5>

            <h3>City:</h3>
            <h5>{this.props.seekers.city}</h5>

            <h3>Zip Code:</h3>
            <h5>{this.props.seekers.zipcode}</h5>
          </div>
          
          <SideNavBarUIJobSeeker />
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    seekers: state.seekers,
    addSeekerError: state.addSeekerError 
  }
}

export default connect(mapStateToProps, { getSeekerById })(JobSeekerProfile);