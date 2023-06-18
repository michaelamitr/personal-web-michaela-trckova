import React from 'react';
import './project.css';

export const Project = ({
  name,
  webLink,
  githubLink,
  description,
  imageUrl,
}) => {
  return (
    <div className="project__container">
      <div className="project-text__container">
        <h2 className="project-name">{name}</h2>
        <div className="project-links__container">
          <a
            href={githubLink}
            target="_blank"
            className="github-project__link"
          ></a>
          <a
            href={webLink}
            target="_blank"
            className={webLink ? 'web-project__link' : 'none'}
          ></a>
        </div>
        <p className="project-description">{description}</p>
      </div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="project-img"
      ></div>
    </div>
  );
};
