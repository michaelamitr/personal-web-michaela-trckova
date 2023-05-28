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
import { Introduction } from './sections/Introduction/introduction';
import { Skills } from './sections/Skills/skills';
import { AboutMe } from './sections/AboutMe/aboutme';

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <main>{location.pathname === '/' ? <Introduction /> : <Outlet />}</main>
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
        path: 'introduction',
        element: <Introduction />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      // {
      //   path: 'portfolio',
      //   element: <Portfolio />,
      // },
      {
        path: 'aboutme',
        element: <AboutMe />,
      },
      // {
      //   path: 'contact',
      //   element: <Contact />,
      // },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
