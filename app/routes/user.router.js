import { Router } from "express";
import UserController from "../controllers/user.controllers";
import isAuth from "../middlewares/auth.middleware";
import { validation } from "../middlewares/validation";
import { authorize, verifyToken } from "../middlewares/verify-token.middleware";

const userRouter = Router();

userRouter.get("/", isAuth, UserController.userList);
userRouter.get("/:id", verifyToken, UserController.userDetail);
userRouter.post("/", validation, UserController.createUser);
userRouter.put("/:id", verifyToken, validation, UserController.updateUser);
userRouter.delete("/:id", verifyToken, authorize, UserController.deleteUser);

export default userRouter;
