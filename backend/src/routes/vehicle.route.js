const { Router } = require("express");
const vehicleController = require("../controllers/vehicle.controller");

const vehicleRouter = new Router();

vehicleRouter.get("/", vehicleController.list);
vehicleRouter.get("/:id", vehicleController.getOne);

vehicleRouter.post("/", vehicleController.create);

vehicleRouter.put("/:id", vehicleController.update);

vehicleRouter.delete("/:id", vehicleController.remove);

module.exports = { vehicleRouter };
