import React from 'react';
import './Backdrop.css';
const backdrop=(props)=>(
    <div className="backdrop" 
    onClick={props.hideSideDrawerHandler}/>
    );
    
export default backdrop;