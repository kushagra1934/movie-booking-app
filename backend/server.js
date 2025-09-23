const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// A simple test route
app.get("/", (req, res) => {
  res.send("Movie Booking System API is running!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
