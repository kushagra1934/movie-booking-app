const express = require("express");
const router = express.Router();
const { createBooking } = require("../../controllers/booking.controller");

router.post("/", createBooking);

module.exports = router;
