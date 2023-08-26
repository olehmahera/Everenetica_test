import React, { FC } from 'react';
import { Checkbox, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { filterCountries, removeCountry, setSelectedCountries } from '../../redux/countriesSlice';
import { Country } from '../../types/Country';
import { RootState } from '../../types/StoreTypes';
import {
  CustomCard,
  CustomCardContent,
  CustomContainer,
  CustomCardActions,
  CustomCardTitle,
  CustomCardCode,
  CustomCardLabel
} from './StyledCountryCard';

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