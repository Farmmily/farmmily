const express = require("express");
const router = express.Router();

const {
  createFarm,
  getAllFarms,
  getFarmById,
  updateFarm,
  deleteFarm,
} = require("../controllers/farmController");

const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

// Public routes
router.get("/", getAllFarms);
router.get("/:id", getFarmById);

// Admin-only routes
router.post("/", authenticate, authorize("admin"), createFarm);
router.put("/:id", authenticate, authorize("admin"), updateFarm);
router.delete("/:id", authenticate, authorize("admin"), deleteFarm);

module.exports = router;
