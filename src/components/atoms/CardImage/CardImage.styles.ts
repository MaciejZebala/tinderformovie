import styled from 'styled-components';

interface ImageProps {
  readonly img: string;
}

export const Wrapper = styled.div<ImageProps>`
  width: 100%;
  height: 70%;
  border-radius: 50px;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;
