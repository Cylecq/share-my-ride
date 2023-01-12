const express = require("express");
const { Router } = require("express");
const { verifyToken } = require("../services/auth");
const rentController = require("../controllers/rent.controller");

const rentRouter = new Router();

const app = express();

app.use(verifyToken);

rentRouter.get("/", rentController.list);
rentRouter.get("/:id", rentController.get);

rentRouter.post("/", rentController.create);

rentRouter.delete("/:id", rentController.deleteById);

module.exports = { rentRouter };
