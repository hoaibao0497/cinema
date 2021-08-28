import { Router } from "express";
import authRouter from "./auth.router";
import cinemaRouter from "./cinema.router";
import cinema_movieRouter from "./cinema_movie.router";
import cineplexRouter from "./cineplex.router";
import movieRouter from "./movie.router";
import showtimeRouter from "./showtime.router";
import userRouter from "./user.router";
const rootRouter = Router();

rootRouter.use("/api/users", userRouter);
rootRouter.use("/api/auth", authRouter);
rootRouter.use("/api/cinemas", cinemaRouter);
rootRouter.use("/api/cineplexes", cineplexRouter);
rootRouter.use("/api/movies", movieRouter);
rootRouter.use("/api/cinema_movie", cinema_movieRouter);
rootRouter.use("/api/showtime", showtimeRouter);

export default rootRouter;
