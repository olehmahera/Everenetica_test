import React, { FC } from 'react';
import { Checkbox, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { removeCountry, setSelectedCountries } from '../../redux/countriesSlice';
import { Country } from '../../types/types';
import { RootState } from '../../redux/store';
import { CustomCard, CustomCardContent, CustomContainer, CustomCardActions, CustomCardTitle, CustomCardCode } from './StyledCountryCard';
import { Link } from 'react-router-dom';

type Props = {
  country: Country;
}


export const CountryCard: FC<Props> = ({ country }) => {
  const { name, ccn3 } = country;
  const selectedCountries = useSelector((state: RootState) => state.countries.selectedCountries);
  const dispatch = useDispatch();

  const isSelected = selectedCountries.some((c: Country) => c.ccn3 === ccn3);

  const handleToggleCountrySelection = () => {
    const updatedSelectedCountries = isSelected
      ? selectedCountries.filter((c: Country) => c.ccn3 !== ccn3)
      : [...selectedCountries, country];
    dispatch(setSelectedCountries(updatedSelectedCountries));
  }

  const handleRemoveCountry = () => {
    dispatch(removeCountry(country));
  };

  return (
    <CustomCard
      style={{ minHeight: '180px', }}
    >
      <CustomCardContent>
        <Link to={`/country/${ccn3}`}>

          <CustomContainer>
            <CustomCardTitle variant="h6" style={{ marginBottom: '12px', }} >
              Name: {name.official}
            </CustomCardTitle>
            <CustomCardCode variant="subtitle1">
              CCN3-code: {ccn3}
            </CustomCardCode>
          </CustomContainer>
        </Link>

        <CustomCardActions>

          <Button onClick={handleRemoveCountry} variant='contained'>
            Delete
          </Button>
          <Checkbox checked={isSelected} onChange={handleToggleCountrySelection} />

        </CustomCardActions>
      </CustomCardContent>
    </CustomCard>
  );
};