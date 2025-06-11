const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const {
    body: { email, password },
  } = req;

  if (!email || !password) {
    return res.status(400).json({ message: "Provide all fields" });
  }

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });

    res
      .status(201)
      .json({ message: "User registered successfully", userId: newUser._id });
  } catch (err) {
    console.log("error", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  const {
    body: { email, password },
  } = req;

  if (!email || !password) {
    return res.status(400).json({ message: "Provide all fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    req.session.Email = user.email;
    res.status(200).json({ message: "Login successful", Email: user.email });
  } catch (err) {
    console.log("error", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const getDashboard = (req, res) => {
  res.status(200).json({
    message: `Welcome to your dashboard, ${req.session.Email}!`,
  });
};
module.exports = { register, login, getDashboard };
