// import { createSlice } from '@reduxjs/toolkit';

// // Создайте начальное состояние для выбранных стран
// const initialState = {
//   selectedCountries: [],
// };

// // Создайте slice (резак) для выбранных стран
// const selectedCountriesSlice = createSlice({
//   name: 'selectedCountries',
//   initialState,
//   reducers: {
//     // Добавление страны в выбранные
//     addCountry: (state, action) => {
//       state.selectedCountries.push(action.payload);
//     },
    
//     // Удаление страны из выбранных
//     removeCountry: (state, action) => {
//       state.selectedCountries = state.selectedCountries.filter(
//         (country) => country.ccn3 !== action.payload.ccn3
//       );
//     },
//   },
// });

// // Экспортируйте действия (actions)
// export const { addCountry, removeCountry } = selectedCountriesSlice.actions;

// // Экспортируйте редьюсер (reducer)
// export default selectedCountriesSlice.reducer;
