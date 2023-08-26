import { rootReducer } from '../redux/rootReducer';
import { store } from '../redux/store';
import { Country } from './Country';

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch;


export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
};

export interface CountryState {
  allCountries: Country[],
  selectedCountries: Country[],
  searchText: string,
  filteredCountries: Country[]
  status: Status,
  error: string | undefined,
};