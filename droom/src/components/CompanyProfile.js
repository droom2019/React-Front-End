import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getCompanyById, getCompany, deleteCompany } from '../actions';
import MatchesMasterContainer from './MatchesMasterContainer';
import SideNavBarUICompany from './SideNavBarUICompany';
import jwt from "jwt-decode";

class CompanyProfile extends Component {
  state = {}

  componentDidMount() {
    const id = jwt(localStorage.getItem("token"))
    this.props.getCompanyById(id.subject);

  }

  getCompanyById = id => {
    this.props.getCompanyById(id.subject);
  }

  deleteCompany = id => {
    this.props.deleteCompany(id.subject);
  }

  render() {
    // console.log(this.props);
    // console.log(this.props.companies);

    return (
      <div>
        <h1>Company View</h1>
          <div className="jobseekerUIcontainer">
            <MatchesMasterContainer />

            <div className="userDisplayContainer">
              <h1>Company Profile</h1>

              <h2>Company Name:</h2>
              <h2>{this.props.companies.companyName}</h2>

              <img
              className="companyPicture"
              src={this.props.companies.companyPicture}
              alt="companyPicture"
              />

              <h2>Company Description:</h2>
              <h3>{this.props.companies.companyDescription}</h3>

              <h3>Company Country:</h3>
              <h5>{this.props.companies.country}</h5>

              <h3>Company State:</h3>
              <h5>{this.props.companies.state}</h5>

              <h3>Company City:</h3>
              <h5>{this.props.companies.city}</h5>

              <h3>Company Zip Code:</h3>
              <h5>{this.props.companies.zipcode}</h5>

              {/* <ul>
                {this.props.companies.map((companies, index) => (
                  <li key={index}>
                  {companies.companyPicture}, 
                  {companies.companyDescription},
                  {companies.country}, 
                  {companies.state}, 
                  {companies.city},
                  {companies.zipcode}
                  <button onClick={() => this.deleteCompany(companies.id)}>Delete</button>
                  </li>
                ))}
              </ul> */}

            </div>

            <SideNavBarUICompany />
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies,
    addCompanyError: state.addCompanyError 
  }
}

export default connect(mapStateToProps, {getCompany, getCompanyById})(CompanyProfile);