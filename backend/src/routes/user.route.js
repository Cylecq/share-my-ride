const express = require("express");
const { Router } = require("express");
const multer = require("multer");
const userController = require("../controllers/user.controller");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyAdmin,
} = require("../services/auth");

const app = express();

const upload = multer({ dest: "uploads/profilePicture/" });

const userRouter = new Router();

userRouter.get("/", userController.list);
userRouter.get("/:id", userController.get);

userRouter.post(
  "/",
  upload.single("avatar"),
  hashPassword,
  userController.create
);
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
