import { Movie } from "../models";
const movieList = (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const movie = await Movie.findAll({ raw: true });
      if (movie) {
        resolve(res.json(movie));
      } else {
        reject(res.json("Movie Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const movieDetail = (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const id = req.params.id;
      const movie = await Movie.findOne({ where: { id }, raw: true });
      if (movie) {
        resolve(res.json(movie));
      } else {
        reject(res.json("Movie Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const createMovie = async (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const { name, startDate, time, evaluate, poster, trailer } = req.body;
      const movie = await Movie.create({
        name,
        startDate,
        time,
        evaluate,
        poster,
        trailer,
      });
      if (movie) {
        resolve(res.json(movie));
      } else {
        reject();
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const updateMovie = async (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const { id } = req.params;
      const { name, startDate, time, evaluate, poster, trailer } = req.body;
      const movie = await Movie.findOne({ where: { id } });
      if (movie) {
        await Movie.update(
          { name, startDate, time, evaluate, poster, trailer },
          { where: { id } }
        );
        const newMovie = await Movie.findOne({ where: { id } });
        resolve(res.json(newMovie));
      } else {
        reject(res.json("Movie Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const deleteMovie = async (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const { id } = req.params;
      const movie = await Movie.findOne({ where: { id } });
      if (movie) {
        await Movie.destroy({ where: { id } });
        resolve(res.json(movie));
      } else {
        reject(res.json("Movie Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
export default {
  movieList,
  createMovie,
  deleteMovie,
  movieDetail,
  updateMovie,
};
