import React from 'react';
import './SideDrawer.css';
import { NavLink } from 'react-router-dom';

const sideDrawer=(props)=>{
    let classes=['side-drawer'];
    if(props.show){
        classes=['side-drawer', 'open'];
    }
    return(
    <nav className={classes.join(' ')}>
    <ul>
        <li>
            <NavLink 
            exact
            to='/'
            activeClassName='current-path'>home</NavLink>
        </li>
        <li>
            <NavLink 
            exact
            to='/about'
            activeClassName='current-path'
            >about</NavLink>
        </li>
        <li>
            <NavLink 
            exact
            activeClassName='current-path'
            to='/contact'>contact</NavLink>
        </li>
        <li>
            <NavLink 
            exact
            activeClassName='current-path'
            to='/login'>login</NavLink>
        </li>
    </ul>
    </nav>);
    };
    
export default sideDrawer;