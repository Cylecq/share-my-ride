const express = require("express");
const { userRouter } = require("./user.route");
const { vehicleRouter } = require("./vehicle.route");
const { rentRouter } = require("./rent.route");

const router = express.Router();

router.use("/api/users", userRouter);
router.use("/api/vehicles", vehicleRouter);
router.use("/api/rents", rentRouter);

module.exports = router;
