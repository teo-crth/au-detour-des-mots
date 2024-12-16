import React, { Children } from 'react';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router';
import Home from '../pages/home/Home';
import NoFoundPage from '../pages/404/NoFoundPage';
import MyBooksPage from '../pages/mybooksPage/MyBooksPage';
import SearchPage from '../pages/searchPage/SearchPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: < NoFoundPage />,
        children: [
          {
            path: '/mes-livres',
            element: < MyBooksPage/>,
          },
          {
            path: '/recherche',
            element: < SearchPage />,
          }
        ]
    }
]);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;