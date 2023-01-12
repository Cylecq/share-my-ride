const { Router } = require("express");
const userController = require("../controllers/user.controller");
const authController = require("../services/auth");

const userRouter = new Router();

userRouter.get("/", userController.list);
userRouter.get("/:id", userController.get);

userRouter.post("/", authController.hashPassword, userController.create);
userRouter.post(
  "/login",
  userController.getByEmailWithPasswordAndPassToNext,
  authController.verifyPassword
);

userRouter.put("/:id", userController.update);

userRouter.delete("/:id", userController.remove);

module.exports = { userRouter };
