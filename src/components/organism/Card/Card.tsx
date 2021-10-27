import axios from 'axios';
import React, { FC, useEffect } from 'react';
import { CardImage } from '../../atoms/CardImage/CardImage';
import { ButtonsWrapper } from '../../molecules/ButtonsWrapper/ButtonsWrapper';
import { MovieInfo } from '../../molecules/MovieInfo/MovieInfo';

import { CardWrapper } from './Card.styles';

export const Card: FC = () => {
  const movieApi = axios.create({});
  useEffect(() => {
    movieApi.get('/movies').then((res) => console.log(res));
  }, []);

  return (
    <CardWrapper>
      <CardImage />
      <MovieInfo />
      <ButtonsWrapper />
    </CardWrapper>
  );
};
