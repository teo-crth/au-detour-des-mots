import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/Home';
import NoFoundPage from '../pages/404/NoFoundPage';
import MyBooksPage from '../pages/mybooksPage/MyBooksPage';
import SearchPage from '../pages/searchPage/SearchPage';
import Layout from '../components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/', // Route parent
    element: <Layout />, // Layout contenant Header et Footer
    errorElement: <NoFoundPage />,
    children: [
      {
        index: true, // Route par défaut pour "/"
        element: <Home />,
      },
      {
        path: 'mes-livres',
        element: <MyBooksPage />,
      },
      {
        path: 'recherche',
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;