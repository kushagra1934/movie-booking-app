const express = require("express");
const router = express.Router();
// Make sure to add getBookingsForUser to this import line
const {
  createBooking,
  getBookingsForUser,
} = require("../../controllers/booking.controller");

router.post("/", createBooking);

// Add this new route for fetching a user's bookings
router.get("/user/:userId", getBookingsForUser);

module.exports = router;
