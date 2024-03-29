import React from 'react';
import './aboutme.css';

export const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-me__container">
        <h2>Hello and welcome to my page!</h2>
        <p className="about-me__text">
          My name is Michaela and I am a junior front-end developer. I have been
          working on my education in the IT field for a while already and I
          eagerly started my career journey as a junior front-end developer. I
          would like to use my achieved skills and further develop myself, my
          abilities and be part of a supportive and friendly team.
        </p>
        <p className="about-me__text">
          I started my journey with{' '}
          <a
            href="https://www.czechitas.cz/en"
            className="czechitas__link"
            target="_blank"
          >
            Czechitas
          </a>
          . It was my greatest pleasure to be accepted to a Digital Academy –
          Web. A 300 hrs course, which opened a door into IT for me. I am very
          grateful for this opportunity. It was a lot of hard work, but it was
          definitely worth it and I gained a lot of valuable knowledge and
          practice.
        </p>
        <p className="about-me__text">
          I decided on the front-end because I consider myself as a creative
          person with a good eye for detail and aesthetic. Design is one of my
          passions. Frontend is a great fit for me and I really enjoy developing
          myself as a front-end developer. So far, I very much enjoy working in
          this field and I am open to further improve my both technical and soft
          skills.
        </p>
      </div>
    </section>
  );
};
