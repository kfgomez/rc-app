import React from 'react';
import './About.css';
import illustration from '../../assets/about.png';
const about=()=>(
    <div className="about">
    <h2>About</h2>
    <p>We are a small web development team looking for the next challenge. From domain setup to illustration, we want to 
    help you launch your business to the cloud.</p>
    <div className="height-spacer"/>
    
    <div className="image-wrapper">
    <div className="about-image">
    <img alt="about illustration" src={illustration} style={{height: '100%', width: '100%'}}/>
    </div>
    </div>
    </div>
);

export default about;