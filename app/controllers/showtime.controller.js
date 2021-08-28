import { Showtime } from "../models";
import { db } from "../config/db.config";

const addShowTime = async (req, res) => {
  try {
    const { startTime, cinemaId } = req.body;
    if (!startTime || !cinemaId) {
      res.status(404).json({ message: "Please input all fileds" });
    } else {
      const time = await Showtime.create({ startTime, cinemaId });
      res.json(time);
    }
  } catch (error) {
    res.json(error);
  }
};

const getCinemaWithShowtime = async (req, res) => {
  try {
    const { showtime } = req.query;
    const [result] = await db.query(`
      select showtimes.startTime , seats.name as Seat, 
      seats.status, movies.name as Movies ,cinemas.name as Cinemas 
      from showtimes inner join seats 
      inner join cinemas inner join movies 
      inner join cinema_movies 
      on showtimes.cinemaId = cinemas.id 
      where showtimes.startTime = "${showtime}"
      `);
    if (![result] || result.toString() == "") {
      res
        .status(404)
        .json("Không tìm thấy rạp chiếu nào ở theo thời gian tìm kiếm!");
    } else {
      res.json(result);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export default { addShowTime, getCinemaWithShowtime };
