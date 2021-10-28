import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';
import { Movie } from '../types/movie.types';

export const db = factory({
  movie: {
    id: primaryKey(String),
    imgUrl: String,
    title: String,
    summary: String,
    rating: Number,
  },
});

export const createMovieData = (): Movie => ({
  id: faker.datatype.uuid(),
  imgUrl: faker.image.avatar(),
  title: faker.random.words(),
  summary: faker.lorem.paragraphs(),
  rating: faker.datatype.float({ min: 0, max: 10 }),
});
