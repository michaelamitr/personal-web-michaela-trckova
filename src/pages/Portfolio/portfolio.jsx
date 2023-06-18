import React, { useState } from 'react';
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
            webLink={item.web}
            githubLink={item.gitHub}
            description={item.description}
            imageUrl={item.image}
          />
        ))}
      </div>
    </section>
  );
};
