import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';
import { Introduction } from './sections/Introduction/introduction';
import { Skills } from './sections/Skills/skills';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
