import './HeroImgStyles.css';

import React from 'react';

import IntroImg from '../assets/arcade-bg.jpg';

import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'm a Corporate Shill</p>
        <h1>Full Stack Web Developer</h1>

        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/content" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
