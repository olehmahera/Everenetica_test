import { createSlice, createAction, ActionCreatorWithPayload, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCountries } from '../api/countriesAPI';
import { Country, CountryState, Status } from '../types/types';

const actionTypes = {
  toggle: 'countries/toggleCountrySelection',
  remove: 'countries/removeCountry',
  load: 'countries/loadCountries',
  search: 'countries/setSearchText',
  select: 'countries/setSelectedCountries',
  filter: 'countries/filterCountries'
}

export type AppAction =
  | ReturnType<typeof loadCountries>
  | ReturnType<typeof toggleCountrySelection>
  | ReturnType<typeof removeCountry>
  | ReturnType<typeof setSearchText>
  | ReturnType<typeof setSelectedCountries>;

export const toggleCountrySelection: ActionCreatorWithPayload<Country> = createAction(actionTypes.toggle);

export const removeCountry: ActionCreatorWithPayload<Country> = createAction(actionTypes.remove);

export const setSearchText: ActionCreatorWithPayload<string> = createAction(actionTypes.search);

export const setSelectedCountries = createAction<Country[]>(actionTypes.select);

export const filterCountries = createAction(actionTypes.filter);

export const loadCountries = createAsyncThunk(
  actionTypes.load, () => {
    return fetchCountries();
  });

const startCountries: CountryState = {
  allCountries: [], // Все страны
  selectedCountries: [], // Выбранные страны
  searchText: '',
  filteredCountries: [],
  status: Status.IDLE, // Статус загрузки
  error: undefined as string | undefined, // Ошибка загрузки данных
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState: startCountries,
  reducers: {
    loadCountries: (state, action) => {
      state.allCountries = action.payload;
    },
    setSelectedCountries: (state, action) => {
      state.selectedCountries = action.payload;
    },
    removeCountry: (state, action) => {
      const country = action.payload;
      // const isCountrySelected = state.selectedCountries.includes(country);
      // console.log(isCountrySelected, country, state.selectedCountries);
      
      // if (isCountrySelected) {
      //   state.selectedCountries = state.selectedCountries.filter(selectedCountry => selectedCountry.ccn3 !== country.ccn3);
      // } else {
        state.selectedCountries.filter(selectedCountry => selectedCountry === country);
      // }
    },
    setSearchText: (state, action) => {
      const inputText = action.payload;
      state.searchText = inputText;
    },
    filterCountries: (state) => {
      const { allCountries, searchText, selectedCountries } = state;
      const searchTextLower = searchText.toLowerCase();

      const filtered = allCountries.filter((country) => {
        const officialName = country.name.official.toLowerCase();

        return searchText === ''
        ? false
        : officialName.includes(searchTextLower)

      });
      const visibleCountries = Object.assign(filtered, selectedCountries)  
      state.filteredCountries = visibleCountries;
      console.log(state.filteredCountries);
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.allCountries = action.payload;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.error.message;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;
