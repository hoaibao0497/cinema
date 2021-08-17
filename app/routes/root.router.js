import { Router } from "express";
import userRouter from "./user.router";
const rootRouter = Router();

rootRouter.use("/api/users", userRouter);

export default rootRouter;
