import React from 'react';
import './contacts.css';

export const Contacts = () => {
  return (
    <section id="contact">
      <div className="contact__container">
        <a className="contact-linkedin"></a>
        <a className="cv"></a>
        <a className="location">
          <h3>Prague</h3>
        </a>
        <a className="phone">
          <h3>+420 737 342 237</h3>
        </a>
        <a className="email">
          <h3>misa.trckova.mt@gmail.com</h3>
        </a>
        <a className="contact-git-hub">
          <h3>michaelamitr</h3>
        </a>
      </div>
    </section>
  );
};
