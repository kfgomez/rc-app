import React from 'react';
import './MainPanel.css';
import illustration from '../../../assets/react-main.png';
import {NavLink} from 'react-router-dom';

const mainPanel=()=>(
    <div className="main-panel">
        <div className="illustration">
            <img src={illustration} alt="react box"/>
        </div>
        <div className="legend-wrapper">
            <div className="legend">
                <div className="title">
                Ready to take the next step?</div>
                <div className="body">
                Transform your ideas into modern web applications
                </div>
            </div>
            <div className="link-wrapper">
                <NavLink 
                to="/contact">
                contact us</NavLink>
            </div>
        </div>
    </div>
);

export default mainPanel;