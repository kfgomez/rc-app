import React from 'react';
import './Home.css';
import MainPanel from './MainPanel/MainPanel';
import SliderPanel from './SliderPanel/SliderPanel';

const home=()=>(
    <div className="home">
    <MainPanel />
    <SliderPanel/>
    </div>
    );
    
export default home;