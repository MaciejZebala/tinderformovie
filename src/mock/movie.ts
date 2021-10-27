import { rest } from 'msw';
import { db } from './db';

export const movieHandler = [
  rest.get('/movies', (req, res, ctx) => {
    return res(ctx.json({ movies: db.movie.getAll() }));
  }),
];
