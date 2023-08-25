import { combineReducers } from 'redux';
import { countriesReducer } from './countriesSlice';
// import { selectedCountriesReducer } from './selectedCountriesSlice';

export const rootReducer = combineReducers({
  countries: countriesReducer,
  // selectedCountries: selectedCountriesReducer,
});
