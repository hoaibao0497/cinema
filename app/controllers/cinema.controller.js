import { Cinema, Cineplex } from "../models";
import { db } from "../config/db.config";

const getListCinema = async (req, res) => {
  try {
    const cinemaList = await Cinema.findAll({
      include: [{ model: Cineplex }],
    });
    if (cinemaList) {
      res.status(200).json(cinemaList);
    } else {
      res.status(404).json("Cinema List Not Found");
    }
  } catch (error) {
    res.json(error);
  }
};

const createCinema = async (req, res) => {
  try {
    const { name, address, image, cineplexId } = req.body;
    if (!(name, address)) {
      res.status(403).json("Please enter a name and address");
    } else {
      const cinema = await Cinema.create({ name, address, image, cineplexId });
      res.status(200).json(cinema);
    }
  } catch (error) {
    res.json(error);
  }
};

const getListCinemaWithAddress = async (req, res) => {
  try {
    const { address } = req.query;
    const [result] = await db.query(
      `
      select cinemas.name as Cinema ,cinemas.address,cinemas.image , 
      cineplexes.name as Cineplex from cinemas 
      inner join cineplexes 
      on cinemas.cineplexId = cineplexes.id 
      where cinemas.address like "%${address}%"`
    );
    if (![result] || result === "object") {
      res.status(404).json("Không tìm thấy rạp chiếu nào ở khu vực này!");
    } else {
      res.json(result);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCinemaWithMovie = async (req, res) => {
  try {
    const { movieName } = req.query;
    const [result] = await db.query(`
    select movies.name as Movies , 
    movies.startDate, movies.time , 
    cinemas.name as Cinemas , cinemas.address 
    from cinemas inner join movies 
    inner join cinema_movies
    on cinema_movies.movieId = movies.id 
    on cinema_movies.cinemaId = cinemas.id 
    where movies.name like "%${movieName}%"
    `);
    if (![result] || result.toString() == "") {
      return res
        .status(404)
        .json({ message: "Không tìm thấy rạp chiếu nào theo phim đã tìm!" });
    } else {
      res.json(result);
    }
  } catch (error) {
    res.json(error);
  }
};

export default {
  getListCinema,
  createCinema,
  getListCinemaWithAddress,
  getCinemaWithMovie,
};
