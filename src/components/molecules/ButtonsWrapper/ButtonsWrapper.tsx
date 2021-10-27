import React, { FC } from 'react';
import { Button } from '../../atoms/Buttons/Buttons';
import { Wrapper } from './ButtonsWrapper.styles';
import { MdOutlineDone } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

export const ButtonsWrapper: FC = () => {
  return (
    <Wrapper>
      <Button reject={false}>
        <MdOutlineDone />
      </Button>
      <Button reject={true}>
        <IoMdClose />
      </Button>
    </Wrapper>
  );
};
