import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import droom from '../assets/images/droom.png';
import jwt from "jwt-decode";
import { getSeekerById, getMatchesBySeekerId, updateSeeker, deleteSeeker } from '../actions';

class JobSeekerMatches extends React.Component {
    componentDidMount() {
        const id = jwt(localStorage.getItem("token"))
        this.props.getSeekerById(id.subject);
        this.props.getMatchesBySeekerId(id.subject);
    }
    

    render() {
        console.log(this.props);
        console.log(this.props.matches);
    
        return (
        <div className="userMatchesContainer">
            <h2>Companies Who Matched You</h2>
        </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        seekers: state.seekers,
        matches: state.matches,
        addMatchesError: state.addMatchesError 
    }
  }

export default connect(mapStateToProps, { getSeekerById, getMatchesBySeekerId })(JobSeekerMatches);