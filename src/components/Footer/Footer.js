import React from 'react';
import './Footer.css';
import envelope from '../../assets/envelope.svg';
import fbIcon from '../../assets/facebook.svg';
import waIcon from '../../assets/whatsapp-logo.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const footer=()=>(
        <div className="footer">
            <div className="icons-wrapper">
                <div className="icon-wrapper">
                <CopyToClipboard text={"contact@redcarats.com"}>
                
                <img src={envelope}
                onClick={()=>window.alert('contact@redcarats.com copied to clipboard')}
                alt="email icon"/>
                
                </CopyToClipboard>
                </div>
                <div className="icon-wrapper">
                <a href="https://www.facebook.com/Redcarats-web-development-578488902582840/"
                rel="noopener noreferrer"
                target="_blank">
                <img 
                src={fbIcon}
                alt="facebook icon"/>
                </a>
                </div>
                <div className="icon-wrapper">
                <CopyToClipboard text={"50232932760"}>
                <img src={waIcon}
                alt="whatsapp icon"
                onClick={()=>window.alert('+502 32932760 copied to clipboard')}/>
                </CopyToClipboard>
                </div>
            </div>
        </div>
        );
        
export default footer;