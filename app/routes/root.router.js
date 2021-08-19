import { Router } from "express";
import authRouter from "./auth.router";
import cinemaRouter from "./cinema.router";
import cineplexRouter from "./cineplex.router";
import userRouter from "./user.router";
const rootRouter = Router();

rootRouter.use("/api/users", userRouter);
rootRouter.use("/api/auth", authRouter);
rootRouter.use("/api/cinemas", cinemaRouter);
rootRouter.use("/api/cineplexes", cineplexRouter);

export default rootRouter;
