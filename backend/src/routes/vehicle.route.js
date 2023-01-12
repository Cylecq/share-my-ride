const express = require("express");
const { Router } = require("express");
const vehicleController = require("../controllers/vehicle.controller");
const { verifyToken } = require("../services/auth");

const app = express();

const vehicleRouter = new Router();

vehicleRouter.get("/", vehicleController.list);
vehicleRouter.get("/:id", vehicleController.getOne);

app.use(verifyToken);

vehicleRouter.post("/", verifyToken, vehicleController.create);

vehicleRouter.put("/:id", vehicleController.update);
vehicleRouter.put("/:id/availability", vehicleController.updateAvailability);

vehicleRouter.delete("/:id", vehicleController.remove);

module.exports = { vehicleRouter };
