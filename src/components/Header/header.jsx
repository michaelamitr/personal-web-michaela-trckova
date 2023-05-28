import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export const Header = () => {
  const [rolloutMenu, setRolloutMenu] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <div className="brand-title">Michaela Trčková</div>
        <a
          href="#"
          className="toggle-button"
          onClick={() => setRolloutMenu(!rolloutMenu)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className={rolloutMenu ? 'navbar-links active' : 'navbar-links'}>
          <ul>
            <li>
              <NavLink to="/introduction">Introduction</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/aboutMe">About me</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
