import { Router } from "express";
import CinemaMovieController from "../controllers/cinema_movie.controller";

const cinema_movieRouter = Router();

cinema_movieRouter.get("/", CinemaMovieController.idList);
cinema_movieRouter.get("/:id", CinemaMovieController.idDetail);
cinema_movieRouter.post("/", CinemaMovieController.createId);
cinema_movieRouter.put("/:id", CinemaMovieController.updateId);
cinema_movieRouter.delete("/:id", CinemaMovieController.deleteId);

export default cinema_movieRouter;
