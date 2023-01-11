const { Router } = require("express");
const userController = require("../controllers/user.controller");

const userRouter = new Router();

userRouter.get("/", userController.list);
userRouter.get("/:id", userController.get);

userRouter.post("/", userController.create);

userRouter.put("/:id", userController.update);

userRouter.delete("/:id", userController.remove);

module.exports = { userRouter };
