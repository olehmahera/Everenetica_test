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
    height: 120px;
    display: flex;
    position: relative;
  }
`;

export const CustomCardContent = styled(CardContent)`
  && {
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-basis: 100%;

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
    flex-basis: 100%;
    padding: 0;
  }
`;

export const CustomCardActions = styled(CardActions)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-end; 
    position: 'absolute'; // Добавляем позицию "absolute"
    background: 'rgba(255, 255, 255, 0.8)'; // Прозрачный фон
    opacity: 0; // По умолчанию невидимый, появляется при hover
    transition: 'opacity 0.3s'; // Анимация для плавного появления

    &:hover{
      opacity: 1;
    }
  }
`;

export const CustomCardTitle = styled(Typography)`
  && {
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
