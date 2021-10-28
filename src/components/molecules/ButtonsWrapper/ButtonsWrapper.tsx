import React, { FC } from 'react';
import { Button } from '../../atoms/Buttons/Buttons';
import { Wrapper } from './ButtonsWrapper.styles';
import { MdOutlineDone } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

interface ButtonWrapperProps {
  reject: () => void;
  accept: () => void;
}

export const ButtonsWrapper: FC<ButtonWrapperProps> = ({ reject, accept }) => {
  return (
    <Wrapper>
      <Button reject={false} onClick={accept}>
        <MdOutlineDone />
      </Button>
      <Button reject={true} onClick={reject}>
        <IoMdClose />
      </Button>
    </Wrapper>
  );
};
