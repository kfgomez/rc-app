import React from 'react';
import './SliderPanel.css';
import rorIllustration from '../../../assets/ruby-on-rails.png';
import reactIllustration from '../../../assets/react.png';
import gSuiteIllustration from '../../../assets/G-suite.png';
import Slider from "react-slick";
const sliderPanel=()=>{
    var settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className="main">
        <div className="carousel">
        <Slider {...settings}>
          <div className="slide-wrapper react">
          <img src={reactIllustration} 
          alt="react illustration"/>
          <h5>React</h5>
          <p>Painless dynamic UIs with one of the most popular Javascript Frameworks</p>
          </div>
          
          <div className="slide-wrapper rails">
          <img src={rorIllustration} 
          alt="ruby on rails illustration"/>
          <h5>Ruby on Rails</h5>
          <p>APIs flavored Ruby</p>
          </div>
          
          <div className="slide-wrapper gsuite">
          <img src={gSuiteIllustration} 
          alt="g suite illustration"/>
          <h5>G Suite</h5>
          <p>Plug everything together with G Suite</p>
          </div>
        </Slider>
        </div>
        <div className="cards-container">
          <div className="card-wrapper">
            <div className="card">
            <img src={reactIllustration} 
            alt="react illustration"/>
            <h5 className="react">React</h5>
            <p>Dynamic UIs with one of the most popular Javascript Frameworks</p>
            </div>
          </div>
          
          <div className="card-wrapper">
            <div className="card">
            <img src={rorIllustration} 
            alt="ruby on rails illustration"/>
            <h5 className="rails">Ruby on Rails</h5>
            <p>APIs flavored Ruby</p>
            </div>
          </div>
          
          <div className="card-wrapper">
            <div className="card">
            <img src={gSuiteIllustration} 
            alt="g suite illustration"/>
            <h5 className="gsuite">G Suite</h5>
            <p>Plug everything together with G Suite</p>
            </div>
          </div>
        </div>
      </div>
    );
};
    
export default sliderPanel;