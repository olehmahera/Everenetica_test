import React, { FC } from 'react';
import {
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../../redux/countriesSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/StoreTypes';

import {
  CustomAppBar,
  CustomTextField,
  CustomToolbar,
  CustomButton
} from './StyledHeader'


export const Header: FC = () => {
  const dispatch = useDispatch();

  const searchText = useSelector<RootState>(state => state.countries.searchText)


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
