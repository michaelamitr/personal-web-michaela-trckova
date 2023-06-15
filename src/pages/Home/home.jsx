import React from 'react';
import './home.css';
import michaelaImage from './img/IMG_3434.jpg';

export const Home = () => {
  return (
    <section id="home">
      <div className="home__container">
        <div className="description__container">
          <h1 className="home__headline">Michaela Trčková</h1>
          <h2 className="home__occupation">front-end developer</h2>
        </div>
        <img
          src={michaelaImage}
          alt="Michaela Trčková, profile picture"
          className="michaela__image"
        ></img>
      </div>
    </section>
  );
};
