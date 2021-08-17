import { Router } from "express";
import UserController from "../controllers/user.controllers";
import { validation } from "../middlewares/validation";
const userRouter = Router();

userRouter.get("/", UserController.userList);
userRouter.get("/:id", UserController.userDetail);
userRouter.post("/", validation, UserController.createUser);
userRouter.put("/:id", validation, UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);

export default userRouter;
