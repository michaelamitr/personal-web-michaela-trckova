import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí
          <a href="https://www.npmjs.com/package/create-czechitas-app">
            create-czechitas-app
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
