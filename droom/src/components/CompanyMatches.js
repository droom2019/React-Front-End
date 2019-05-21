import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import droom from '../assets/images/droom.png';
import jwt from "jwt-decode";
import { getCompanyById, getMatchesByCompanyId } from '../actions';

class CompanyMatches extends React.Component {
    componentDidMount() {
        const id = jwt(localStorage.getItem("token"))
        this.props.getCompanyById(id.subject);
        this.props.getMatchesByCompanyId(id.subject);
    }
    

    render() {
        console.log(this.props);
        console.log(this.props.matches);
    
        return (
        <div className="userMatchesContainer">
            <h2>Job Seeker Who Matched You</h2>
        </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        companies: state.companies,
        matches: state.matches,
        addMatchesError: state.addMatchesError 
    }
  }

export default connect(mapStateToProps, { getCompanyById, getMatchesByCompanyId })(CompanyMatches);