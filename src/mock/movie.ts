import { rest } from 'msw';
import { db } from './db';

export const movieHandler = [
  rest.get('/recomendations', (req, res, ctx) => {
    const page = (req.url.searchParams.get('page') || 1) as number;
    return res(
      ctx.json({
        movies: db.movie.findMany({
          take: 1,
          skip: Math.max(1 * (page - 1), 0),
        }),
      })
    );
  }),
];
