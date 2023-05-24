import React from 'react';
import { useState } from 'react';
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
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#aboutMe">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
