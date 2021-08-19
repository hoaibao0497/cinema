import { CinemaMovie } from "../models";
const idList = (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const id_cinema_movie = await CinemaMovie.findAll({ raw: true });
      if (id_cinema_movie) {
        resolve(res.json(id_cinema_movie));
      } else {
        reject(res.json("ID Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const idDetail = (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const id = req.params.id;
      const id_cinema_movie = await CinemaMovie.findOne({
        where: { id },
        raw: true,
      });
      if (id_cinema_movie) {
        resolve(res.json(id_cinema_movie));
      } else {
        reject(res.json("Cinema Movie Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const createId = async (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const { cinemaId, movieId } = req.body;
      const id_cinema_movie = await CinemaMovie.create({
        cinemaId,
        movieId,
      });
      if (id_cinema_movie) {
        resolve(res.json(id_cinema_movie));
      } else {
        reject();
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const updateId = async (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const { id } = req.params;
      const { cinemaId, movieId } = req.body;
      const id_cinema_movie = await CinemaMovie.findOne({ where: { id } });
      if (id_cinema_movie) {
        await Movie.update({ cinemaId, movieId }, { where: { id } });
        const newId = await CinemaMovie.findOne({ where: { id } });
        resolve(res.json(newId));
      } else {
        reject(res.json("Cinema Movie Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const deleteId = async (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const { id } = req.params;
      const id_cinema_movie = await CinemaMovie.findOne({ where: { id } });
      if (id_cinema_movie) {
        await CinemaMovie.destroy({ where: { id } });
        resolve(res.json(id_cinema_movie));
      } else {
        reject(res.json("Movie Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
export default {
  idList,
  createId,
  deleteId,
  idDetail,
  updateId,
};
