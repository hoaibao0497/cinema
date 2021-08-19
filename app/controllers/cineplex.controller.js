import { Cineplex, Cinema } from "../models";
import { db } from "../config/db.config";

const getListCineplex = async (req, res) => {
  try {
    const cineplexList = await Cineplex.findAll();
    if (cineplexList) {
      res.status(200).json(cineplexList);
    } else {
      res.status(404).json("Cineplex List Not Found");
    }
  } catch (error) {
    res.json(error);
  }
};

const getCineplexDetailsWithCinema = async (req, res) => {
  try {
    const { nameCineplex } = req.query;
    const [cineplex] = await db.query(
      `select cinemas.name as Cinema ,cinemas.address,cinemas.image , 
      cineplexes.name as Cineplex, cineplexes.logo from cinemas 
      inner join cineplexes 
      on cinemas.cineplexId = cineplexes.id 
      where cineplexes.name = "${nameCineplex}"`
    );
    if (cineplex) {
      res.status(200).json(cineplex);
    } else {
      res.status(404).json("Cineplex Not Found");
    }
  } catch (error) {
    res.json(error);
  }
};

const getListCineplexWithCinema = async (req, res) => {
  try {
    console.log(Cineplex);
    const cineplexList = await Cineplex.findAll({ include: Cinema });
    if (cineplexList) {
      res.status(200).json(cineplexList);
    } else {
      res.status(404).json("Cineplex List Not Found");
    }
  } catch (error) {
    res.json(error);
  }
};

const createCineplex = async (req, res) => {
  try {
    const { name, logo } = req.body;
    if (!name) {
      res.status(403).json("Please enter a name");
    } else {
      const cineplex = await Cineplex.create({ name, logo });
      res.status(200).json(cineplex);
    }
  } catch (error) {
    res.json(error);
  }
};

export default {
  getListCineplex,
  getCineplexDetailsWithCinema,
  getListCineplexWithCinema,
  createCineplex,
};
