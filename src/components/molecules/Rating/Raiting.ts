import styled from 'styled-components';
import { P } from '../../atoms/Typography/Typography';

export const Wrapper = styled.div`
  display: flex;
`;

export const StyledP = styled(P)`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-left: 10px;
`;
