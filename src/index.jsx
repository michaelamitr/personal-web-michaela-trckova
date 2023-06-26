import React, { useEffect } from 'react';
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
import { References } from './pages/References/references';
import { ErrorPage } from './pages/Errorpage/errorpage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>{location.pathname === '/' ? <Home /> : <Outlet />}</main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
      {
        path: 'references',
        element: <References />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
