import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import profileDemoPicture from '../assets/images/profileDemoPicture.png';
import JobSeekerMatchesMasterContainer from './JobSeekerMatchesMasterContainer';
import SideNavBarUIJobSeeker from './SideNavBarUIJobSeeker';
import { getSeekerById, updateSeeker, deleteSeeker } from '../actions';
import jwt from "jwt-decode";


class JobSeekerProfile extends React.Component {
  state = {
    // seekers: {
    //   firstName: '',
    // }
  }

  componentDidMount() {
    const id = jwt(localStorage.getItem("token"))
    this.props.getSeekerById(id.subject);
  }

  handleChange = e => {
    e.preventDefault();
    // console.log("changed seekers info")
    this.setState({
       seekers: {
          ...this.state.seekers,
          [e.target.name]: e.target.value
       }
    });
  };

  updateSeeker = e => {
    e.preventDefault();
    this.props.updateSeeker(1);
  }

  deleteSeeker = e => {
    e.preventDefault();
    this.props.deleteSeeker(this.props.seekers.id);
  }

  render() {

    // console.log(this.props);
    // console.log(this.props.seekers);

    return (
      <div>
        <h1>Job Seeker View</h1>
        <div className="jobseekerUIcontainer">
          <JobSeekerMatchesMasterContainer />
          
          <div className="userDisplayContainer">
            <h1>Job Seeker Profile</h1>

            <form onSubmit={this.handleSubmit}>

            <div className="userNameContainer">
              <div>
                <h3>First Name:</h3>

                <input 
                type="text" 
                name="firstName" 
                value={this.props.seekers.firstName}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.seekers.firstName}
                />
              </div>

              <div>
                <h3>Last Name:</h3>

                <input 
                name="lastName" 
                value={this.props.seekers.lastName}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.seekers.lastName}
                />
              </div>
            </div>

            <img
            className="profilePicture"
            src={this.props.seekers.profilePicture}
            alt="profilePicture"
            />

            <h2>Date of Birth:</h2>
            <h5>{this.props.seekers.month}/ {this.props.seekers.day}/ {this.props.seekers.year}</h5>

            <div>
            <h3>Country:</h3>

            <input 
                name="country" 
                value={this.props.seekers.country}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.seekers.country}
                />
            </div>

            <div>
            <h3>State:</h3>

            <input 
                name="state" 
                value={this.props.seekers.state}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.seekers.state}
                />
            </div>

            <div>
            <h3>City:</h3>

            <input 
                name="city" 
                value={this.props.seekers.city}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.seekers.city}
                />
            </div>

            <div>
            <h3>Zip Code:</h3>

            <input 
                name="zipcode" 
                value={this.props.seekers.zipcode}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.seekers.zipcode}
                />
            </div>

            <div className="buttonsGroup">
            <button onClick={() => this.updateSeeker(this.props.seekers.id)}>Update Profile</button>

            <button onClick={() => this.deleteSeeker(this.props.seekers.id)}>Delete Profile</button>
            </div>
            </form>
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

export default connect(mapStateToProps, { getSeekerById, updateSeeker, deleteSeeker })(JobSeekerProfile);