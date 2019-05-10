import React from 'react';
import { Header } from '../StyledComponents';
import brittneyProfile from '../assets/images/brittneyProfile.png';
import willProfile from '../assets/images/willProfile.png';
import benProfile from '../assets/images/benProfile.png';

class Team extends React.Component {
    render() {

    return (
        <div className="teamContainer" >
        <Header >UX Developer:</Header>
        <a>Brittney Thomas</a>
        <img
            className="teamPics"
            height="450"
            src={brittneyProfile}
            alt="brittneyProfile"
        />
        
        <Header >Front End Architect:</Header>
        <a>William Soukkachang</a>
        <img
            className="teamPics"
            height="450"
            src={willProfile}
            alt="willProfile"
        />
        
        <Header >Backend Architect:</Header>
        <a>Ben Tsao</a>
        <img
            className="teamPics"
            height="450"
            src={benProfile}
            alt="benProfile"
        />
        </div>
        )
    }
}

export default Team;