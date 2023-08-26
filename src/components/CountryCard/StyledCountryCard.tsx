import { styled } from "styled-components";
import {
  Card,
  CardContent,
  Container,
  CardActions,
  Typography,
} from '@mui/material';


export const CustomCard = styled(Card)`
  && {
    line-height: 1;
    min-height: 180px;
    display: flex;
    position: relative;
  }
`;

export const CustomCardContent = styled(CardContent)`
  && {
    padding: 8px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:last-child {
      padding: 8px;
    }
  }
`;

export const CustomContainer = styled(Container)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
  }
`;

export const CustomCardActions = styled(CardActions)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-end; 
    width: 80px;
    padding: 5px;
    background: rgba(255, 255, 255, 0.8);
    opacity: 0;
    transition: opacity 0.3s;

    &:hover{
      opacity: 1;
    }
  }
`;

export const CustomCardTitle = styled(Typography)`
  && {
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const CustomCardCode = styled(Typography)`
  && {
    font-size: 14px;
  }
`;

export const CustomCardLabel = styled.label`
  && {
    font-size: 12px;
  }
`;
