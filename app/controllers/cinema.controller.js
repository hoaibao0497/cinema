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

export default { getListCinema, createCinema, getListCinemaWithAddress };
