import React, { FC } from 'react';
import { H3, P } from '../../atoms/Typography/Typography';
import { Wrapper } from './MovieInfo.styles';

interface MovieInfoProps {
  title: string;
  summary: string;
}

export const MovieInfo: FC<MovieInfoProps> = ({ title, summary }) => {
  return (
    <Wrapper>
      <H3>{title}</H3>
      <P>{summary}</P>
    </Wrapper>
  );
};
