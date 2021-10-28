import axios from 'axios';
import React, { useCallback } from 'react';
import { Action } from '../../context/MovieContext';

export function useMovies(dispatch: React.Dispatch<Action>) {
  const rejectMovie = useCallback(
    async (id) => {
      dispatch({ type: 'INCREASE_PAGE' });
      try {
        await axios.post(`/reject/${id}`);
      } catch (e) {
        console.log(e);
      }
    },
    [dispatch]
  );

  const acceptMovie = useCallback(
    async (id) => {
      dispatch({ type: 'INCREASE_PAGE' });
      try {
        await axios.post(`/accept/${id}`);
      } catch (e) {
        console.log(e);
      }
    },
    [dispatch]
  );

  return {
    rejectMovie,
    acceptMovie,
  };
}
