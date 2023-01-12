const { Router } = require("express");
const rentController = require("../controllers/rent.controller");

const rentRouter = new Router();

rentRouter.get("/", rentController.list);
rentRouter.get("/:id", rentController.get);

rentRouter.post("/", rentController.create);

rentRouter.delete("/:id", rentController.deleteById);

module.exports = { rentRouter };
