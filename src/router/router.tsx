// Router.js
import React from 'react';
import { createHashRouter as CreateRouter } from 'react-router-dom';
import { App } from '../App'; // Замените на ваш компонент для главной страницы
import { CountryDetails } from '../components/CountryDetails/CountryDetails'; // Ваш компонент для страницы деталей страны

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
