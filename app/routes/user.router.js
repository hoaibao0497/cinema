import { Router } from "express";
import UserController from "../controllers/user.controllers";
import { validation } from "../middlewares/validation";
import { verifyToken } from "../middlewares/verify-token.middleware";

const userRouter = Router();

userRouter.get("/", verifyToken, UserController.userList);
userRouter.get("/:id", verifyToken, UserController.userDetail);
userRouter.post("/", validation, UserController.createUser);
userRouter.put("/:id", verifyToken, validation, UserController.updateUser);
userRouter.delete("/:id", verifyToken, UserController.deleteUser);

export default userRouter;
