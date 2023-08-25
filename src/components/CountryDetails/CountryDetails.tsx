import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { RootState } from '../../redux/store';
import { Country } from '../../types/types';

export const CountryDetails = () => {
  const { countryccn3 } = useParams();
  const country = useSelector((state: RootState) =>
    state.countries.selectedCountries.find((c: Country) => c.ccn3 === countryccn3)
  );

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <Typography variant="h4">{country.name.official}</Typography>
      <Typography variant="subtitle1">{country.ccn3}</Typography>
    </div>
  );
};


