import styled from 'styled-components';

interface ImageProps {
  readonly imgUrl: string;
}

export const CardImage = styled.div<ImageProps>`
  width: 100%;
  height: 50%;
  border-radius: 50px;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;
