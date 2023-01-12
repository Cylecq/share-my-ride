const express = require("express");
const { Router } = require("express");
const userController = require("../controllers/user.controller");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyAdmin,
} = require("../services/auth");

const app = express();

const userRouter = new Router();

userRouter.get("/", userController.list);
userRouter.get("/:id", userController.get);

userRouter.post("/", hashPassword, userController.create);
userRouter.post(
  "/login",
  userController.getByEmailWithPasswordAndPassToNext,
  verifyPassword
);

app.use(verifyToken);

userRouter.put("/:id", userController.update);

app.use(verifyAdmin);

userRouter.delete("/:id", userController.remove);

module.exports = { userRouter };
