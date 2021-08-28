import { Router } from "express";
import ShowtimeController from "../controllers/showtime.controller";

const showtimeRouter = Router();

showtimeRouter.post("/", ShowtimeController.addShowTime);
showtimeRouter.get(
  "/search-cinema-with-showtime",
  ShowtimeController.getCinemaWithShowtime
);

export default showtimeRouter;
