import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchCountries } from '../api/countriesAPI';
import { Country } from '../types/Country';
import { CountryState, Status } from '../types/StoreTypes';

export const loadCountries = createAsyncThunk(
  'loadCountries', () => {
    return fetchCountries();
  });

const startCountries: CountryState = {
  allCountries: [],
  selectedCountries: [],
  searchText: '',
  filteredCountries: [],
  status: Status.IDLE,
  error: undefined as string | undefined,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState: startCountries,
  reducers: {
    setSelectedCountries: (countriesState, action: PayloadAction<Country>) => {
      const { selectedCountries } = countriesState;
      const isSelected = selectedCountries.some((c) => c.ccn3 === action.payload.ccn3);

      const updatedSelectedCountries = isSelected
        ? selectedCountries.filter((selectedCountry) => selectedCountry.ccn3 !== action.payload.ccn3)
        : [...selectedCountries, action.payload];

        countriesState.selectedCountries = updatedSelectedCountries;
    },
    removeCountry: (countriesState, action: PayloadAction<Country>) => {
      const { selectedCountries, allCountries } = countriesState;
      const country = action.payload;
      countriesState.selectedCountries = selectedCountries.filter(selectedCountry => selectedCountry.ccn3 !== country.ccn3);
      countriesState.allCountries = allCountries.filter(selectedCountry => selectedCountry.ccn3 !== country.ccn3);
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    clearSelected: (state) => {
      state.selectedCountries = [];
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

      const visibleCountries = [...selectedCountries]; 
      filtered.forEach((country) => {
        if (!visibleCountries.some((selectedCountry) => selectedCountry.ccn3 === country.ccn3)) {
          visibleCountries.push(country);
        }
      });
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
export const { setSelectedCountries, removeCountry, setSearchText, filterCountries, clearSelected } = countriesSlice.actions;
