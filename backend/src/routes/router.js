const express = require("express");
const { userRouter } = require("./user.route");

const router = express.Router();

router.use("/api/users", userRouter);

module.exports = router;
