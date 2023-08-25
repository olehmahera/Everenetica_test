import React from 'react';
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { RootState } from '../../redux/store';
import { Country } from '../../types/types';
import { CustomPaper, CustomArticle, CustomLink, CustomImg } from './StyledCountryDetails';

export const CountryDetails = () => {
  const { countryccn3 } = useParams();
  const country: Country | undefined = useSelector((state: RootState) =>
    state.countries.allCountries.find((c: Country) => c.ccn3 === countryccn3)
  );


  if (!country) {
    return <div>Country not found</div>;
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


