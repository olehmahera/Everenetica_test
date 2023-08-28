import React, { FC } from 'react';
import {
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { setSearchText } from '../../redux/countriesSlice';

import {
  CustomAppBar,
  CustomTextField,
  CustomToolbar,
  CustomButton
} from './StyledHeader'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';


export const Header: FC = () => {
  const dispatch = useAppDispatch();

  const searchText = useAppSelector(state => state.countries.searchText)


  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    dispatch(setSearchText(text));
  };

  const handleResetClick = () => {
    dispatch(setSearchText(''));
  };

  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        <CustomTextField
          helperText="Enter country name"
          variant="outlined"
          value={searchText}
          onChange={handleSearchTextChange}
          InputProps={{
            startAdornment:
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>,
          }}
        />
        <CustomButton variant="contained" onClick={handleResetClick}>
          Reset
        </CustomButton>
      </CustomToolbar>
    </CustomAppBar>
  );
};
