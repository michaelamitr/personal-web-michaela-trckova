import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import burgerIcon from './icons/burgermenu.svg';
import closeIcon from './icons/menuclose.svg';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <img
        className="burgermenu"
        src={open ? closeIcon : burgerIcon}
        onClick={toggleMenu}
      ></img>
      <div className={open ? 'navmob' : 'navmob closenavmob'}>
        <ul>
          <li>
            <NavLink to="/skills" onClick={toggleMenu}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={toggleMenu}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" onClick={toggleMenu}>
              About me
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" onClick={toggleMenu}>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/about-me">About me</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
