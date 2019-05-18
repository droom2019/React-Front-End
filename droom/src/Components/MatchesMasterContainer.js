import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import droom from '../assets/images/droom.png';
import Messages from './Messages';
import Matches from './Matches';


class MatchesMasterContainer extends React.Component {

    render() {
        
        return (
            <div className="matchesContainer">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="matches-tab" data-toggle="tab" href="#matches" role="tab" aria-controls="matches"
                        aria-selected="true">Matches</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages"
                        aria-selected="false">Messages</a>
                    </li>
                </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="matches" role="tabpanel" aria-labelledby="matches-tab">
                            <Matches />
                        </div>

                        <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                            <Messages />
                        </div>
                    </div>
            </div>
            );
        }
    };

export default MatchesMasterContainer;