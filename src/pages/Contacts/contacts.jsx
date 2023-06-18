import React from 'react';
import './contacts.css';
// import michaelaCV from '../../../public/MichaelaTrckova-CV.pdf';

export const Contacts = () => {
  return (
    <section id="contact">
      <div className="contact__container">
        <div className="basic-info__container">
          <h1>Michaela Trčková</h1>
          <div className="li-cv__container">
            <a
              href="https://www.linkedin.com/in/michaela-tr%C4%8Dkov%C3%A1-49a739239/"
              className="contact-item__container"
              target="_blank"
            >
              <div className="contact-linkedin"></div>
            </a>
            <a
              // href={michaelaCV}
              // target="_blank"
              className="contact-item__container"
            >
              <div className="cv"></div>
            </a>
          </div>
        </div>
        <div className="rest-info__container">
          <div className="location">
            <a className="location-name">
              <span className="location-icon"></span>
              Prague
            </a>
          </div>
          <div className="phone">
            <a href="tel:+420737342237" className="phone-number">
              <span className="phone-icon"></span>
              +420 737 342 237
            </a>
          </div>
          <div className="email">
            <a href="mailto:misa.trckova.mt@gmail.com" className="email-link">
              <span className="email-icon"></span>
              misa.trckova.mt@gmail.com
            </a>
          </div>
          <div className="git-hub">
            <a
              href="https://github.com/michaelamitr"
              className="git-hub__link"
              target="_blank"
            >
              <span className="git-hub-icon"></span>
              michaelamitr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
