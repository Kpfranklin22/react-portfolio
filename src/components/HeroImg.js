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
        <p>Welcome Hero! Come have a look at my wares!</p>
        <h1>Full Stack MERN Junior Web Developer</h1>

        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
