import React from 'react';
import './Toolbar.css'
import DrawerButton from '../SideDrawer/DrawerButton';
import Logo from './Logo/Logo';
import { NavLink } from 'react-router-dom';

const toolbar=(props)=>{
    return(
        <header>
            <nav className="toolbar">
                <div className="toolbar-logo">
                <Logo />
                </div>
                <div className="company-title">REDCARATS</div>
                <div className="spacer"/>
                <div>
                    <ul className="navigation">    
                        <li>
                            <NavLink 
                            to='/'
                            exact
                            activeClassName="active">home</NavLink></li>
                        <li>
                            <NavLink to='/about'
                            exact
                            activeClassName="active">about</NavLink></li>
                        <li>
                            <NavLink to='/contact'
                            exact
                            activeClassName="active">
                            contact</NavLink></li>
                        <li>
                            <a 
                            href="https://pm.redcarats.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            login
                            </a></li>
                    </ul>
                </div>
                <div className="navigation_icon">
                <DrawerButton 
                showSideDrawerHandler={props.showSideDrawerHandler}/>
                </div>
            </nav>
        </header>
        );
};

export default toolbar;