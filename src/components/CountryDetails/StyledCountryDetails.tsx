import { Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const CustomPaper = styled(Paper)`
  && {
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const CustomBox = styled(Box)`
  && {
    border: 1px solid;
    height: 200px;
  }
`;

export const CustomArticle = styled.article`
  && {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 12px;
  }
`;

export const CustomLink = styled(Link)`
  && {
    background-color: #9082f7;
    display: inline-block;
    padding: 5px;
    border-radius: 4px;
    &:hover {
      background-color: #302485;
    }
  }
`;

