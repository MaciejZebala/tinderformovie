import axios from 'axios';
import React, { useEffect, useReducer, createContext } from 'react';
import { Movie } from '../types/movie.types';

type AppState = typeof initialState;
type Action =
  | { type: 'INCREASE_PAGE' }
  | { type: 'GET_MOVIES'; payload: Movie[] }
  | { type: 'LOADING_MOVIE' };

interface MovieProviderProps {
  children: React.ReactNode;
}
const initialState = {
  page: 2,
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: [] as Movie[],
};
const studentsAPI = axios.create({});

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'INCREASE_PAGE':
      return {
        ...state,
        page: state.page + 1,
        data: state.data.slice(0, -1),
      };
    case 'GET_MOVIES':
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: [...action.payload, ...state.data],
      };
    case 'LOADING_MOVIE':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    default:
      return state;
  }
};

const MoviesContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ state: initialState, dispatch: () => {} });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MoviesContextProvider({ children }: MovieProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: 'LOADING_MOVIE' });
      try {
        const result = await studentsAPI.get(
          `/recomendations?page=${state.page}`
        );

        dispatch({ type: 'GET_MOVIES', payload: result.data.movies });
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [state.page]);

  return (
    <MoviesContext.Provider value={{ state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
}

export { MoviesContext, MoviesContextProvider };
