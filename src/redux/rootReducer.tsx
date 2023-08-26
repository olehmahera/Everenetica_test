import { combineReducers } from 'redux';
import { countriesReducer } from './countriesSlice';

export const rootReducer = combineReducers({
  countries: countriesReducer,
});
