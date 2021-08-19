import { Router } from "express";
import CinemaController from "../controllers/cinema.controller";
const cinemaRouter = Router();

cinemaRouter.get("/", CinemaController.getListCinema);
cinemaRouter.get("/search-address", CinemaController.getListCinemaWithAddress);
cinemaRouter.get(
  "/search-cinema-with-movie",
  CinemaController.getCinemaWithMovie
);
cinemaRouter.post("/", CinemaController.createCinema);

export default cinemaRouter;
