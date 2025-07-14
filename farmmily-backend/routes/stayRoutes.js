const express = require("express");
const router = express.Router();
const {
  bookStay,
  getMyStays,
  getAllStays,
} = require("../controllers/stayController");

const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

// Authenticated users
router.post("/", authenticate, bookStay);
router.get("/my", authenticate, getMyStays);

// Admin
router.get("/", authenticate, authorize("admin"), getAllStays);

module.exports = router;
