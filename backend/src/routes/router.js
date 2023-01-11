const express = require("express");
const { userRouter } = require("./user.route");
const { vehicleRouter } = require("./vehicle.route");

const router = express.Router();

router.use("/api/users", userRouter);
router.use("/api/vehicles", vehicleRouter);

module.exports = router;
