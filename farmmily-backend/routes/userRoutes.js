const express = require("express");
const router = express.Router();

const {
  registerOrLoginUser,
  getAllUsers,
  updateUserRole,
} = require("../controllers/userController");

const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

// Create or fetch user from Firebase token
router.post("/login", authenticate, registerOrLoginUser);

// Admin only routes
router.get("/", authenticate, authorize("admin"), getAllUsers);
router.put("/:uid/role", authenticate, authorize("admin"), updateUserRole);

module.exports = router;
