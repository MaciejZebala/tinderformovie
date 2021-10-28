import axios from 'axios';
import { type } from 'os';
import React, { FC, useContext, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';
import { MoviesContext } from '../../../context/MovieContext';
import { Movie } from '../../../types/movie.types';
import { CardImage } from '../../atoms/CardImage/CardImage';
import { ButtonsWrapper } from '../../molecules/ButtonsWrapper/ButtonsWrapper';
import { MovieInfo } from '../../molecules/MovieInfo/MovieInfo';

import { CardWrapper } from './Card.styles';

const StyledTinderCard = styled(TinderCard)`
  position: absolute;
  height: 75%;
  padding: 10px;
  border-radius: 50px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  background-color: white;
`;

export const Card: FC = () => {
  // const movieApi = axios.create({});
  // useEffect(() => {
  //   movieApi.get('/recomendations').then((res) => console.log(res));
  // }, []);

  const { state, dispatch } = useContext(MoviesContext);
  const handleAddPage = () => {
    // console.log(id);
    // console.log(state.data[1].id);
    // if (id === state.data[1].id) {
    dispatch({ type: 'INCREASE_PAGE' });
    // }
  };
  console.log(state);
  if (state.isLoading) {
    return <p>Loading..</p>;
  }
  return (
    <CardWrapper>
      {state.data.map((movie, index) => {
        const { id, title, rating, summary, imgUrl } = movie;
        return (
          <StyledTinderCard
            preventSwipe={['up', 'down', 'left']}
            onSwipe={(dir) => handleAddPage()}
          >
            <CardImage imgUrl={imgUrl} />
            <MovieInfo title={title} summary={summary} />
          </StyledTinderCard>
        );
      })}
      {state.data.length === 0 && <p>Koniec</p>}
      <ButtonsWrapper onClick={handleAddPage} />
    </CardWrapper>
  );
};
