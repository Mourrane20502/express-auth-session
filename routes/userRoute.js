const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getDashboard,
} = require("../controllers/userController");
const verifySession = require("../middleware/verifySession");

router.post("/register", register);
router.post("/login", login);

router.get("/dashboard", verifySession, getDashboard);

module.exports = router;
