import React, { FC } from 'react';
import { CardImage } from '../../atoms/CardImage/CardImage';
import { ButtonsWrapper } from '../../molecules/ButtonsWrapper/ButtonsWrapper';
import { MovieInfo } from '../../molecules/MovieInfo/MovieInfo';

import { CardWrapper } from './Card.styles';

export const Card: FC = () => {
  return (
    <CardWrapper>
      <CardImage />
      <MovieInfo />
      <ButtonsWrapper />
    </CardWrapper>
  );
};
