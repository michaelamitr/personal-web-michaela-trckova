import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';
import './style.css';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';
import { Home } from './pages/Home/home';
import { Skills } from './pages/Skills/skills';
import { Portfolio } from './pages/Portfolio/portfolio';
import { AboutMe } from './pages/Aboutme/aboutme';
import { Contacts } from './pages/Contacts/contacts';

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <main>{location.pathname === '/' ? <Home /> : <Outlet />}</main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'about-me',
        element: <AboutMe />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
