import React from 'react';
import { createHashRouter as CreateRouter } from 'react-router-dom';
import { App } from '../App'; 
import { CountryDetails } from '../components/CountryDetails/CountryDetails';

export const router = CreateRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <h1>Page not found</h1>,
      children: [
        {
          path: '/ccn3',
          element: <CountryDetails />,
        },
      ],
    },
  ]);
