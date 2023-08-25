import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, CircularProgress } from '@mui/material';

import { AppDispatch, RootState } from '../../redux/store';
import { Country } from '../../types/types';
import { CustomPaper, CustomArticle, CustomLink, CustomImg } from './StyledCountryDetails';
import { loadCountries } from '../../redux/countriesSlice';

export const CountryDetails = () => {  
  const dispatch = useDispatch<AppDispatch>();
  const { countryccn3 } = useParams();
  const country: Country | undefined = useSelector((state: RootState) =>
    state.countries.allCountries.find((c: Country) => c.ccn3 === countryccn3)
  );

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);


  if (!country) {
    return <div><CircularProgress /></div>;
  }

  const { flags, region, population } = country;

  console.log(country);


  return (
    <CustomPaper>
      <Typography variant="h4">Country name: {country.name.official}</Typography>
      <Typography variant="subtitle1">CCN3-code: {country.ccn3}</Typography>
      <CustomArticle>

        <CustomImg
          src={flags.svg}
          alt="country_flag"
        />
        <div>

          <Typography variant="subtitle1">Population: {population}</Typography>
          <Typography variant="subtitle1">Region: {region}</Typography>
        </div>
      </CustomArticle>
      <CustomLink to='/'>
        Back to list
      </CustomLink>
    </CustomPaper >
  );
};


