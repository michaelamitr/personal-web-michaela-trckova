import React from 'react';
import './skills.css';

export const Skills = () => {
  return (
    <section id="skills">
      <ul className="skills__container">
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon ts-icon"></div>TypeScript
          </div>
          <p className="skill-text">
            Using data types, creating own interfaces.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon nextjs-icon"></div>Next.js
          </div>
          <p className="skill-text">
            Able to build an efficient web and read the documentation to further
            improve Next.js efficiency.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon html-icon"></div>
            <div className="icon css-icon"></div>HTML & CSS
          </div>
          <p className="skill-text">
            Use for coding good loking content and usage in combination with
            other technologies.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon js-icon"></div>
            JavaScript
          </div>
          <p className="skill-text">
            Communication with server, components, data binding, data
            propagation, using API, routing, high-order functions, work with
            arrays, cycles, own DOM elements.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon react-icon"></div>React
          </div>
          <p className="skill-text">
            Communication with server, components, props mechanism, data
            binding, data propagation, using API, routing. Ability to create a
            working interactive website and design a logical component
            structure.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon bootstrap-icon"></div>Bootstrap
          </div>
          <p className="skill-text">
            Responsive styling, reading the documentation.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon fm-icon"></div>Framer Motion
          </div>
          <p className="skill-text">Good looking animations.</p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon git-icon"></div>
            <div className="icon github-skill-icon"></div>Git, GitHub
          </div>
          <p className="skill-text">
            Cooperation in a team, work in branches, solving conflicts.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon ms-icon"></div>
            <div className="icon jira-icon"></div>MS 365, Jira
          </div>
          <p className="skill-text">Team cooperation, work management.</p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon figma-icon"></div>Figma
          </div>
          <p className="skill-text">
            Constructing a functional wireframe and prototype. UI and UX design
            thinking and good eye for detail.
          </p>
        </li>
        <li className="skill-item">
          <div className="skill-heading">
            <div className="icon lr-icon"></div>
            <div className="icon ps-icon"></div>
            <div className="icon pr-icon"></div>
            Adobe Lightroom, Photoshop, Premiere Pro
          </div>
          <p className="skill-text">
            Editing pictures with a realistic touch or to make a specific
            impression. Basic knowledge of Photoshop, usually use for selections
            and color fill edits. Cutting simple but good looking videos.
          </p>
        </li>
      </ul>
    </section>
  );
};
