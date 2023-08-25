import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from './countriesSlice';
import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch;

