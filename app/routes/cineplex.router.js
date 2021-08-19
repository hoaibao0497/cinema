import { Router } from "express";
import CineplexController from "../controllers/cineplex.controller";
const cineplexRouter = Router();
cineplexRouter.get("/", CineplexController.getListCineplex);
cineplexRouter.get(
  "/search-cineplexName",
  CineplexController.getCineplexDetailsWithCinema
);
cineplexRouter.get(
  "/with-cinema",
  CineplexController.getListCineplexWithCinema
);
cineplexRouter.post("/", CineplexController.createCineplex);

export default cineplexRouter;
