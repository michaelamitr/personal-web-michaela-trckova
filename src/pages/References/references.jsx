import React from 'react';
import './references.css';
import { Reference } from './Reference/reference';
import refData from '../../references.json';

export const References = () => {
  return (
    <section id="references">
      <div className="references__container">
        {refData.map((item) => (
          <Reference
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
