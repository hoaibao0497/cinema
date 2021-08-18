import { Router } from "express";
import checkEmail from "../middlewares/check_exist.middlerware";
import User from "../models";
import AuthController from "../controllers/auth.controllers";
import { validation } from "../middlewares/validation";

const authRouter = Router();

authRouter.post(
  "/register",
  validation,
  checkEmail(User),
  AuthController.register
);
authRouter.post("/login", AuthController.login);

export default authRouter;
