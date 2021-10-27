import styled from 'styled-components';
interface ButtonType {
  reject: boolean;
}
export const Button = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  font-size: ${({ theme }) => theme.fontSize.xxl};
  cursor: pointer;
  color: ${({ reject, theme }) =>
    reject ? theme.colors.error : theme.colors.success};
`;
