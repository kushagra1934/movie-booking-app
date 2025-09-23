const Booking = require("../models/Booking.model");
const Show = require("../models/Show.model");


exports.createBooking = async (req, res) => {
  // Get the user, show, and seats from the request body
  const { user, show, seats } = req.body;

  try {
    // Action 1: Create and save the new booking document
    const newBooking = new Booking({
      user,
      show,
      seats,
    });
    const booking = await newBooking.save();

    // Action 2: Find the corresponding show and update its 'bookedSeats' array
    await Show.updateOne(
      { _id: show },
      { $push: { bookedSeats: { $each: seats } } }
    );

    res.status(201).json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
