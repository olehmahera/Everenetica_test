import React, { FC } from 'react';
import { Checkbox, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';

import { filterCountries, removeCountry, setSelectedCountries } from '../../redux/countriesSlice';
import { Country } from '../../types/Country';
import {
  CustomCard,
  CustomCardContent,
  CustomContainer,
  CustomCardActions,
  CustomCardTitle,
  CustomCardCode,
  CustomCardLabel
} from './StyledCountryCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

type Props = {
  country: Country;
}

export const CountryCard: FC<Props> = ({ country }) => {
  const { name, ccn3 } = country;
  const selectedCountries = useAppSelector((state) => state.countries.selectedCountries);
  const dispatch = useAppDispatch();

  const isSelected = selectedCountries.some((c: Country) => c.ccn3 === ccn3);

  const handleToggleCountrySelection = () => {
    const updatedSelectedCountries = isSelected
      ? selectedCountries.filter((selectedCountry: Country) => selectedCountry.ccn3 !== ccn3)
      : [...selectedCountries, country];
    dispatch(setSelectedCountries(updatedSelectedCountries));
    dispatch(filterCountries())
  }

  const handleRemoveCountry = () => {
    dispatch(removeCountry(country));
  };

  return (
    <CustomCard>
      <CustomCardContent>
        <Link to={`/${ccn3}`}>

          <CustomContainer>
            <CustomCardTitle variant="h6">
              Name: {name.official}
            </CustomCardTitle>
            <CustomCardCode variant="subtitle1">
              CCN3-code: {ccn3}
            </CustomCardCode>
          </CustomContainer>
        </Link>

        <CustomCardActions>
          <CustomCardLabel >
            Unselect
            <Button
              onClick={handleRemoveCountry}
              variant='contained'
              color='error'
            >
              <ClearIcon />
            </Button>
          </CustomCardLabel>
          <CustomCardLabel >
            <Checkbox checked={isSelected} onChange={handleToggleCountrySelection} />
            Select
          </CustomCardLabel>
        </CustomCardActions>
      </CustomCardContent>
    </CustomCard>
  );
};