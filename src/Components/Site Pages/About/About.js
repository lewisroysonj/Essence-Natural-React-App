import React from 'react';

import './About.css';
import Footer from '../../Footer/Footer';

import BG from './about imgs/about bg.svg';
import aboutArt from './about imgs/about art.svg';

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="aboutBody">
                  <h1>ABOUT US</h1>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br></br> sed diam nonumy eirmod tempor<br></br>  invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br></br> 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br></br>  no sea takimata sanctus est Lorem ipsum dolor sit amet.<br></br>  Lorem ipsum dolor sit amet, consetetur.</p>
                  <img className="aboutArt" src={aboutArt} alt="aboutus" />
                  <img className="aboutBG" src={BG} alt="bg"/>
                </div>
                <Footer />
            </div>
        )
    }
}