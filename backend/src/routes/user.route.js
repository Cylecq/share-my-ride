const { Router } = require("express");
const multer = require("multer");
const userController = require("../controllers/user.controller");
const authController = require("../services/auth");

const upload = multer({ dest: "uploads/profilePicture/" });

const userRouter = new Router();

userRouter.get("/", userController.list);
userRouter.get("/:id", userController.get);

userRouter.post(
  "/",
  upload.single("avatar"),
  authController.hashPassword,
  userController.create
);
userRouter.post(
  "/login",
  userController.getByEmailWithPasswordAndPassToNext,
  authController.verifyPassword
);

userRouter.put("/:id", userController.update);

userRouter.delete("/:id", userController.remove);

module.exports = { userRouter };
