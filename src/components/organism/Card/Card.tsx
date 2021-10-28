import axios from 'axios';
import { type } from 'os';
import React, { FC, useContext, useEffect } from 'react';
import { MoviesContext } from '../../../context/MovieContext';
import { CardImage } from '../../atoms/CardImage/CardImage';
import { ButtonsWrapper } from '../../molecules/ButtonsWrapper/ButtonsWrapper';
import { MovieInfo } from '../../molecules/MovieInfo/MovieInfo';

import { CardWrapper } from './Card.styles';

export const Card: FC = () => {
  // const movieApi = axios.create({});
  // useEffect(() => {
  //   movieApi.get('/recomendations').then((res) => console.log(res));
  // }, []);
  const { state, dispatch } = useContext(MoviesContext);

  const handleAddPage = () => {
    dispatch({ type: 'INCREASE_PAGE' });
  };
  return (
    <CardWrapper>
      <CardImage />
      <MovieInfo />
      <ButtonsWrapper onClick={handleAddPage} />
    </CardWrapper>
  );
};
