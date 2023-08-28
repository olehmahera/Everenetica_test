import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Typography, CircularProgress, Checkbox } from '@mui/material';

import { AppDispatch } from '../../types/StoreTypes';
import { Country } from '../../types/Country';
import { CustomPaper, CustomArticle, CustomLink, CustomImg } from './StyledCountryDetails';
import { loadCountries } from '../../redux/countriesSlice';
import { useAppSelector } from '../../redux/hooks';

export const CountryDetails = () => {  
  const dispatch = useDispatch<AppDispatch>();
  const { countryccn3 } = useParams();
  
  const country = useAppSelector((state) =>
    state.countries.allCountries.find((country: Country) => country.ccn3 === countryccn3)
  );
  
  const selectedCountries = useAppSelector((state) => state.countries.selectedCountries);

  
  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);
  
  
  if (!country) {
    return <CircularProgress />;
  }
  
  const { flags, region, population, ccn3, name } = country;

  const isSelected = selectedCountries.some((country: Country) => country.ccn3 === ccn3);


  return (
    <CustomPaper>
      <Typography variant="h4">Country name: {name.official}</Typography>
      <Typography variant="subtitle1">CCN3-code: {ccn3}</Typography>
      <CustomArticle>

        <CustomImg
          src={flags.svg}
          alt="country_flag"
        />
        <div>

          <Typography variant="subtitle1">Population: {population}</Typography>
          <Typography variant="subtitle1">Region: {region}</Typography>
          <Checkbox checked={isSelected} /> Is country selected

        </div>
      </CustomArticle>
      <CustomLink to='/'>
        Back to list
      </CustomLink>
    </CustomPaper >
  );
};


