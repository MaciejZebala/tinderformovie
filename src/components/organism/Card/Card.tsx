import { FC, useContext } from 'react';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';
import { MoviesContext } from '../../../context/MovieContext';

import { CardImage } from '../../atoms/CardImage/CardImage';
import { ButtonsWrapper } from '../../molecules/ButtonsWrapper/ButtonsWrapper';
import { MovieInfo } from '../../molecules/MovieInfo/MovieInfo';
import { Rating } from '../../molecules/Rating/Rating';

import { CardWrapper } from './Card.styles';

const StyledTinderCard = styled(TinderCard)`
  height: 75%;
  padding: 10px;
  border-radius: 50px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  background-color: white;
`;

export const Card: FC = () => {
  const { state, rejectMovie, acceptMovie } = useContext(MoviesContext);

  const handleAddPage = (dir: string, id: string) => {
    if (dir === 'left') {
      acceptMovie(id);
    } else {
      rejectMovie(id);
    }
  };

  if (state.isLoading) {
    return <p>Loading..</p>;
  }
  return (
    <CardWrapper>
      {state.data.map((movie, index) => {
        const { id, title, rating, summary, imgUrl } = movie;
        return (
          <>
            <Rating rating={rating} />
            <StyledTinderCard
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => handleAddPage(dir, id)}
            >
              <CardImage imgUrl={imgUrl} />
              <MovieInfo title={title} summary={summary} />
            </StyledTinderCard>
            <ButtonsWrapper
              reject={() => rejectMovie(id)}
              accept={() => acceptMovie(id)}
            />
          </>
        );
      })}
      {state.data.length === 0 && <p>Koniec</p>}
    </CardWrapper>
  );
};
