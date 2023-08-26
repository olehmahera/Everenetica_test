import React, { FC } from 'react';
import './styles/reset.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';

import { Header } from './components/Header/Header';
import { CountryList } from './components/CountryList/CountryList';
import { CountryDetails } from './components/CountryDetails/CountryDetails';

export const App: FC = () => {

  return (
      <Router>
        <CssBaseline />
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<CountryList />} />
            <Route path="/:countryccn3" element={<CountryDetails />} />
          </Routes>
        </Container>
      </Router>
  );
};
