import React from 'react';
import './reference.css';

export const Reference = ({ name, role, text, linkedIn, gitHub }) => {
  return (
    <div className="reference__container">
      <div className="ref-name-contact__container">
        <h2 className="name">{name}</h2>
        <div className="ref-contact__container">
          <a href={linkedIn} className="linked-in"></a>
          <a href={gitHub} className="github"></a>
        </div>
      </div>
      <h3 className="role">{role}</h3>
      <h3 className="reference__text">"{text}"</h3>
    </div>
  );
};
