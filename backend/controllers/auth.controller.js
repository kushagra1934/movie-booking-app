const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // 2. Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // 3. If credentials are correct, create a JWT
    const payload = {
      user: {
        id: user.id, // Use the user's database ID in the token
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET, // A secret key you'll create
      { expiresIn: "5h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token }); // 4. Send the token to the client
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
