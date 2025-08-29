
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './routes';
import { Home } from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
  },
]);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
