import React from 'react';
import './Footer.css';
import envelope from '../../assets/envelope.svg';
import fbIcon from '../../assets/facebook.svg';
import waIcon from '../../assets/whatsapp-logo.svg';
const footer=()=>(
        <div className="footer">
            <div className="icons-wrapper">
                <div className="icon-wrapper">
                <img src={envelope}
                alt="email icon"/>
                </div>
                <div className="icon-wrapper">
                <img src={fbIcon}
                alt="facebook icon"/>
                </div>
                <div className="icon-wrapper">
                <img src={waIcon}
                alt="whatsapp icon"/>
                </div>
            </div>
        </div>
        );
        
export default footer;