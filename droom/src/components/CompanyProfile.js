import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCompany, deleteCompany} from '../actions';
import MatchesMasterContainer from './MatchesMasterContainer';
import SideNavBarUIJobSeeker from './SideNavBarUIJobSeeker';


class CompanyProfile extends Component {
  componentDidMount() {
    this.props.getCompany();
    console.log(this.props.companies);
  }

  getCompanyById = id => {
    this.props.getCompanyById(id);
  }

//   deleteCompany = id => {
//     this.props.deleteCompany(id);
//   }

  render() {
    return (
      
      <div>
        <h1>Job Seeker View</h1>
          <div className="jobseekerUIcontainer">
            <MatchesMasterContainer />

            <div className="userDisplayContainer">
              <h1>Company Profile</h1>

              <ul>
                <h2>Companies: </h2>
                {this.props.companies.map((companies, index) => (
                  <li key={index}>
                  {companies.companyName}, 
                  {companies.companyPicture}, 
                  {companies.companyDescription},
                  {companies.country}, 
                  {companies.state}, 
                  {companies.city},
                  {companies.zipcode}
                  <button onClick={() => this.deleteCompany(companies.id)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>

            <SideNavBarUIJobSeeker />
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, {getCompany, })(CompanyProfile);