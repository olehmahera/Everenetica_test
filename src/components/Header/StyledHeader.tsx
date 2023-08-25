import { styled } from "styled-components";
import {
  AppBar,
  Toolbar,
  TextField,
  Button
} from '@mui/material';

export const CustomAppBar = styled(AppBar)`
  && {
    justify-content: center;
    min-height: 120px;
    padding: 12px;
    margin-bottom: 20px;
  }
`;

export const CustomToolbar = styled(Toolbar)`
  && {
height: 100%;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
    }
`;

export const CustomTextField = styled(TextField)`
  && {
  height: 100%;
  background-color: #fff;
  border-radius: 4px;
    }
`;

export const CustomButton = styled(Button)`
  && {
    color: #fff;
    background-color: #9082f7;

    &:hover {
      background-color: #302485;
    }
  }
`;