const express = require("express");
const router = express.Router();
const {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

// Public
router.get("/", getAllProperties);
router.get("/:id", getPropertyById);

// Admin
router.post("/", authenticate, authorize("admin"), createProperty);
router.put("/:id", authenticate, authorize("admin"), updateProperty);
router.delete("/:id", authenticate, authorize("admin"), deleteProperty);

module.exports = router;
