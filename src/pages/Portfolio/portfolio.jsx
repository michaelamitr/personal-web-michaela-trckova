import React from 'react';
import './portfolio.css';
import portfData from '../../projects.json';
import { Project } from './Project/project';

export const Portfolio = () => {
  return (
    <section id="references">
      <div className="references__container">
        {portfData.map((item) => (
          <Project
            key={item.id}
            name={item.name}
            linkedIn={item.linkedIn}
            gitHub={item.gitHub}
            role={item.role}
            text={item.reference}
          />
        ))}
      </div>
    </section>
  );
};
