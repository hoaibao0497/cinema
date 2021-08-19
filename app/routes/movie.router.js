import { Router } from "express";
import MovieController from "../controllers/movie.controllers";
import { isAuth, isAuthorize } from "../middlewares/auth.middleware";
import { validation } from "../middlewares/validation";

const movieRouter = Router();

movieRouter.get(
  "/",
  isAuth,
  isAuthorize(["Admin", "Super-admin"]),
  MovieController.movieList
);
movieRouter.get(
  "/:id",
  isAuth,
  isAuthorize(["Admin", "super-admin"]),
  MovieController.movieDetail
);
movieRouter.post("/", validation, MovieController.createMovie);
movieRouter.put(
  "/:id",
  isAuth,
  isAuthorize(["Admin", "super-admin", "manager"]),
  validation,
  MovieController.updateMovie
);
movieRouter.delete(
  "/:id",
  isAuth,
  isAuthorize(["Admin", "super-admin"]),
  MovieController.deleteMovie
);

export default movieRouter;
