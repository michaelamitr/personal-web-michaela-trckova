import React from 'react';
import './errorpage.css';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <section id="error">
        <div className="error__container">
          <h1 className="error-number">404</h1>
          <h2 className="error-text">
            Getting lost is a part of the route to self-understanding.
          </h2>
          <h3 className="error-text-two">But nothing is (yet) there.</h3>
        </div>
      </section>
      <Footer />
    </>
  );
};
