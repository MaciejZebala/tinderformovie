import { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAsync } from '../components/hooks/useMovies';
import { Card } from '../components/organism/Card/Card';
import { MoviesContext } from '../context/MovieContext';
import { GlobalStyle } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';
import { Wrapper } from './App.styles';

export const App: FC = () => {
  const { state, dispatch } = useContext(MoviesContext);
  console.log(state);
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
