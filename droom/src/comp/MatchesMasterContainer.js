import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import droom from '../assets/images/droom.png';
import Messages from './Messages';
import Matches from './Matches';


class MatchesMasterContainer extends React.Component {

    render() {
        
        return (
            <div className="matchesMasterContainer">
                <ul class="nav nav-tabs" id="myTab" >

                    <li class="nav-item">
                        <a class="nav-link active" id="matches-tab" data-toggle="tab" href="#matches" role="tab" aria-controls="messages"
                        aria-selected="false">Matches</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages"
                        aria-selected="false">Messages</a>
                    </li>
                </ul>
                
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="matches" role="tabpanel" aria-labelledby="matches-tab">
                            <Route path="/matches" component={Matches} />
                            <Matches />
                        </div>

                        <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                            <Route path="/messages" component={Messages} />
                            <Messages />
                        </div>
                    </div>
            </div>
            );
        }
    };

export default MatchesMasterContainer;