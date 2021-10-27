import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Card } from '../components/organism/Card/Card';
import { GlobalStyle } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';
import { Wrapper } from './App.styles';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Card />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
