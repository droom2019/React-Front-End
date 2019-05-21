import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import droom from '../assets/images/droom.png';
import Messages from './Messages';
import JobSeekerMatches from './JobSeekerMatches';


class JobSeekerMatchesMasterContainer extends React.Component {

    render() {
        
        return (
            <div className="matchesMasterContainer">
                <ul class="nav nav-tabs">

                    <li class="nav-item">
                        <a class="nav-link active" id="matches-tab" data-toggle="tab" href="#matches" >Matches</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages">Messages</a>
                    </li>
                </ul>
                
                    <div class="tab-content">
                        <div class="container tab-pane active" id="matches">
                            <Route to="/#matches" path="/jobseekermatches" component={JobSeekerMatches} />
                            <JobSeekerMatches />
                        </div>

                        <div class="container tab-pane fade" id="messages">
                            <Route to="/#messages" path="/messages" component={Messages} />
                            <Messages />
                        </div>
                    </div>
            </div>
            );
        }
    };

export default JobSeekerMatchesMasterContainer;