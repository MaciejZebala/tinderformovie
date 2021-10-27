import { setupWorker } from 'msw';
import { movieHandler } from './movie';
import { createMovieData, db } from './db';

export const worker = setupWorker(...movieHandler);

const seed = () => {
  [...new Array(50)].forEach(() => db.movie.create(createMovieData()));
};

seed();
