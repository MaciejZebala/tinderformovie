import React, { FC } from 'react';
import { H3 } from '../../atoms/Typography/Typography';
import { StyledP, Wrapper } from './Raiting';

interface RatingProps {
  rating: number;
}
export const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <Wrapper>
      <H3>Raiting:</H3>
      <StyledP>{rating} /10 </StyledP>
    </Wrapper>
  );
};
