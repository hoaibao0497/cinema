import { Router } from "express";
import UserController from "../controllers/user.controllers";
import { isAuth, isAuthorize } from "../middlewares/auth.middleware";
import { validation } from "../middlewares/validation";

const userRouter = Router();

userRouter.get(
  "/",
  isAuth,
  isAuthorize(["admin", "super-admin"]),
  UserController.userList
);
userRouter.get(
  "/:id",
  isAuth,
  isAuthorize(["admin", "super-admin"]),
  UserController.userDetail
);
userRouter.post("/", validation, UserController.createUser);
userRouter.put(
  "/:id",
  isAuth,
  isAuthorize(["admin", "super-admin", "manager"]),
  validation,
  UserController.updateUser
);
userRouter.delete(
  "/:id",
  isAuth,
  isAuthorize(["admin", "super-admin"]),
  UserController.deleteUser
);

export default userRouter;
