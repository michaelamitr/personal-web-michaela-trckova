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
            Java Script
          </div>
          <p className="skill-text">
            Communication with server, components, parent-child-child
            communication, using API, routing, high-order functions, work with
            arrays, cycles, own DOM elements.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="react-icon"></div>React
          </div>
          <p className="skill-text">
            Communication with server, components, props mechanism,
            parent-child-child communication, using API, routing.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="git-icon"></div>
            <div className="github-skill-icon"></div>Git, GitHub
          </div>
          <p className="skill-text">
            Cooperation in a team, work in branches, solving conflicts.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="figma-icon"></div>Figma
          </div>
          <p className="skill-text">
            Constructing a functional wireframe and prototype. UI and UX design
            thinking and good eye for detail.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="lr-icon"></div>
            <div className="ps-icon"></div>
            <div className="pr-icon"></div>
            Adobe Lightroom, Photoshop, Premiere Pro
          </div>
          <p className="skill-text">
            Editing pictures with a realistic touch or in order to make a
            specific impression. Basic knowledge of Photoshop, usually use for
            selections and color fill edits. Cutting simple but good looking
            videos.
          </p>
        </li>
      </ul>
    </section>
  );
};
