import './WordCardStyles.css';

import React from 'react';
import projectPokedex from '../assets/project-pokedex.png';
import { NavLink } from 'react-router-dom';

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={projectPokedex} alt="image" />
          <h2 className="project-title">Project Title</h2>
          <div className="project-details">
            <p>This is some text</p>
            <div className="project-btns">
            <NavLink
              to="https://kpfranklin22.github.io/project-pokedex/"
              className="btn"
            >
              View
            </NavLink>
            <NavLink
              to="https://github.com/Kpfranklin22/project-pokedex"
              className="btn"
            >
              Source
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
