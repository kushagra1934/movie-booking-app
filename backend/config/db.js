const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully...");
  } catch (err) {
    console.error(err.message);
    // If connection fails, exit the application process
    process.exit(1);
  }
};

module.exports = connectDB;
