import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';
import { Wrapper } from './App.styles';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper></Wrapper>
    </ThemeProvider>
  );
};

export default App;
