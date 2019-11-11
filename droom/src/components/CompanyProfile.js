import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getCompanyById, updateCompany, deleteCompany } from '../actions';
import CompanyMatchesMasterContainer from './CompanyMatchesMasterContainer';
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

  updateCompany = e => {
    e.preventDefault();
    this.props.updateSeeker(this.props.companies.id);
  }

  deleteCompany = id => {
    this.props.deleteCompany(this.props.companies.id);
  }

  render() {
    // console.log(this.props);
    // console.log(this.props.companies);

    return (
      <div>
        <h1>Company View</h1>
          <div className="jobseekerUIcontainer">
            <CompanyMatchesMasterContainer />

            <div className="userDisplayContainer">
              <h1>Company Profile</h1>

              <form onSubmit={this.handleSubmit}>

              <div>
              <h2>Company Name:</h2>
              <h2>{this.props.companies.companyName}</h2>

              <input 
                type="text" 
                name="companyName" 
                value={this.props.companies.companyName}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.companies.companyName}
                />
              </div>

              <img
              className="companyPicture"
              src={this.props.companies.companyPicture}
              alt="companyPicture"
              />
              
              <div>
              <h2>Company Description:</h2>

              <textarea 
                class="form-control rounded-0" 
                rows="8"
                type="text" 
                name="companyDescription" 
                value={this.props.companies.companyDescription}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.companies.companyDescription}
                />
              </div>

              <div>
              <h3>Company Country:</h3>

              <input 
              type="text" 
                name="country" 
                value={this.props.companies.country}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.companies.country}
                />
              </div>

              <div>
              <h3>Company State:</h3>

              <input 
                type="text" 
                name="state" 
                value={this.props.companies.state}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.companies.state}
                />
              </div>

              <div>
              <h3>Company City:</h3>

              <input 
                type="text"
                name="city"
                value={this.props.companies.city}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.companies.city}
                />
              </div>

              <div>
              <h3>Company Zip Code:</h3>

              <input 
                type="text" 
                name="zipcode" 
                value={this.props.companies.zipcode}
                onChange={this.handleChange} 
                class="form-control mb-4" 
                placeholder={this.props.companies.zipcode}
                />
              </div>
              
              <div className="buttonsGroup">
              <button onClick={() => this.updateCompany(this.props.companies.id)}>Update Profile</button>

              <button onClick={() => this.deleteCompany(this.props.companies.id)}>Delete Profile</button>
              </div>
              </form>
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

export default connect(mapStateToProps, { getCompanyById, updateCompany, deleteCompany})(CompanyProfile);