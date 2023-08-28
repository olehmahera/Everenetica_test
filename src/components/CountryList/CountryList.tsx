import React, { FC, useEffect } from 'react';
import { Grid, Button } from '@mui/material';

import { filterCountries, loadCountries, clearSelected } from '../../redux/countriesSlice';
import { CountryCard } from '../CountryCard/CountryCard';
import { CustomGrid } from './StyledCountryList'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const CountryList: FC = () => {
  const dispatch = useAppDispatch();

  const { searchText, selectedCountries, filteredCountries } = useAppSelector((state) => state.countries);

  console.log(selectedCountries);

  const hasSelectedCountries = selectedCountries.length > 0;

  const handleClearSelected = () => {
    dispatch(clearSelected());
  };

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterCountries());
  }, [dispatch, searchText, selectedCountries]);

  console.log(filteredCountries);


  return (

    <CustomGrid container spacing={3}>
      {filteredCountries.map((country) => {
        return (
          <Grid item key={country.ccn3} xs={12} sm={6} md={4}>
            <CountryCard country={country} />
          </Grid>)
      })}
      {hasSelectedCountries && (
        <Grid item xs={12}>
          <Button onClick={handleClearSelected} variant='contained'>
            Clear selected
          </Button>
        </Grid>
      )}
    </CustomGrid>
  );
};
