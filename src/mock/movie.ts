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

  rest.post('/reject/:id', (req, res, ctx) => {
    if (req.params.id) {
      return res(
        ctx.status(200),
        ctx.json({
          message: 'rejected',
        })
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({
          error: 'No matching movie',
        })
      );
    }
  }),

  rest.post('/accept/:id', (req, res, ctx) => {
    if (req.params.id) {
      return res(
        ctx.status(200),
        ctx.json({
          message: 'accepted',
        })
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({
          error: 'No matching movie',
        })
      );
    }
  }),
];
