import React from 'react';
import './DrawerButton.css';
const drawerButton=(props)=>(
    <button 
    onClick={props.showSideDrawerHandler}
    className="toggle-button">
    <div className="toggle-button__line"/>
    <div className="toggle-button__line"/>
    <div className="toggle-button__line"/>
    </button>
    );
export default drawerButton;