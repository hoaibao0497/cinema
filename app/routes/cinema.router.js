import { Router } from "express";
import CinemaController from "../controllers/cinema.controller";
const cinemaRouter = Router();

cinemaRouter.get("/", CinemaController.getListCinema);
cinemaRouter.get("/search-address", CinemaController.getListCinemaWithAddress);
cinemaRouter.post("/", CinemaController.createCinema);

export default cinemaRouter;
