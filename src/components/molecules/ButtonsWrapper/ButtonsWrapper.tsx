import React, { FC } from 'react';
import { Button } from '../../atoms/Buttons/Buttons';
import { Wrapper } from './ButtonsWrapper.styles';
import { MdOutlineDone } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

interface ButtonWrapperProps {
  onClick: () => void;
}

export const ButtonsWrapper = ({ onClick }: ButtonWrapperProps) => {
  return (
    <Wrapper>
      <Button reject={false} onClick={onClick}>
        <MdOutlineDone />
      </Button>
      <Button reject={true} onClick={onClick}>
        <IoMdClose />
      </Button>
    </Wrapper>
  );
};
