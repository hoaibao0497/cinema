const listId = [
  {
    id: 1,
    cinemaId: 1,
    movieId: 1,
  },
  {
    id: 2,
    cinemaId: 1,
    movieId: 2,
  },
  {
    id: 3,
    cinemaId: 1,
    movieId: 3,
  },
  {
    id: 4,
    cinemaId: 1,
    movieId: 4,
  },
  {
    id: 5,
    cinemaId: 2,
    movieId: 1,
  },
  {
    id: 6,
    cinemaId: 2,
    movieId: 2,
  },
  {
    id: 7,
    cinemaId: 2,
    movieId: 3,
  },
  {
    id: 8,
    cinemaId: 3,
    movieId: 3,
  },
  {
    id: 9,
    cinemaId: 3,
    movieId: 4,
  },
  {
    id: 10,
    cinemaId: 7,
    movieId: 4,
  },
  {
    id: 11,
    cinemaId: 7,
    movieId: 3,
  },
  {
    id: 12,
    cinemaId: 7,
    movieId: 1,
  },
  {
    id: 13,
    cinemaId: 7,
    movieId: 2,
  },
  {
    id: 14,
    cinemaId: 8,
    movieId: 1,
  },
  {
    id: 15,
    cinemaId: 8,
    movieId: 2,
  },
  {
    id: 16,
    cinemaId: 8,
    movieId: 3,
  },
  {
    id: 17,
    cinemaId: 8,
    movieId: 4,
  },
  {
    id: 18,
    cinemaId: 9,
    movieId: 4,
  },
  {
    id: 19,
    cinemaId: 10,
    movieId: 1,
  },
  {
    id: 20,
    cinemaId: 10,
    movieId: 2,
  },
  {
    id: 21,
    cinemaId: 14,
    movieId: 2,
  },
  {
    id: 22,
    cinemaId: 14,
    movieId: 3,
  },
  {
    id: 23,
    cinemaId: 14,
    movieId: 4,
  },
  {
    id: 24,
    cinemaId: 15,
    movieId: 1,
  },
  {
    id: 25,
    cinemaId: 15,
    movieId: 2,
  },
  {
    id: 26,
    cinemaId: 15,
    movieId: 3,
  },
  {
    id: 27,
    cinemaId: 15,
    movieId: 4,
  },
];
import { CinemaMovie } from "../models";
const createCinemaMovie = () => {
  listId.forEach(async (seed) => {
    await CinemaMovie.create({
      cinemaId: seed.cinemaId,
      movieId: seed.movieId,
    });
  });
};

export { createCinemaMovie };
