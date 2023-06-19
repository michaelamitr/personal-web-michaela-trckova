import React from 'react';
import './skills.css';

export const Skills = () => {
  return (
    <section id="skills">
      <ul className="skills__container">
        <li className="skill-item">
          <div className="skill-heading">
            <div className="html-icon"></div>
            <div className="css-icon"></div>HTML & CSS
          </div>
          <p className="skill-text">
            Use for coding good loking content and usage in combination with
            other technologies.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="js-icon"></div>
            <div className="react-icon"></div>Java Script, React
          </div>
          <p className="skill-text">
            Communication with server, components, parent-child-child
            communication, using API, routing.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="git-icon"></div>
            <div className="github-skill-icon"></div>Git, GitHub
          </div>
          <p className="skill-text">Cooperation in a team.</p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="figma-icon"></div>Figma
          </div>
          <p className="skill-text">Constructing a prototype.</p>
        </li>
      </ul>
    </section>
  );
};
