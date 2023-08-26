import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../types/StoreTypes';
import { Grid, Button } from '@mui/material';

import { filterCountries, loadCountries, setSelectedCountries } from '../../redux/countriesSlice';
import { CountryCard } from '../CountryCard/CountryCard';
import { CustomGrid } from './StyledCountryList'
import { Country } from '../../types/Country';

export const CountryList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const searchText = useSelector((state: RootState) => state.countries.searchText);

  const selectedCountries = useSelector(
    (state: RootState) => state.countries.selectedCountries
  );

  console.log(selectedCountries);

  const filteredCountries = useSelector((state: RootState) => state.countries.filteredCountries);

  const hasSelectedCountries = selectedCountries.length > 0;

  const handleClearSelected = () => {
    dispatch(setSelectedCountries([]));
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
      {filteredCountries.map((country: Country) => {
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
