import React from 'react';
import './introduction.css';
import introductionPic from '../../img/IMG_3434.jpg';

export const Introduction = () => {
  return (
    <section id="introduction">
      <div className="intro-text">
        <h1>Michaela Trčková</h1>
        <h2>Front-end developer</h2>
        <h3>Welcome to my page!</h3>
      </div>
      <img
        src={introductionPic}
        alt="Michaela profile picture"
        className="profile-pic"
      ></img>
    </section>
  );
};
