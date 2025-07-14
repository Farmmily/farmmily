const express = require("express");
const router = express.Router();

const {
  leaseFarm,
  getMyFarmLeases,
  getAllFarmLeases,
  updateFarmLease,
  cancelFarmLease,
} = require("../controllers/farmLeaseController");

const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

// Customer routes
router.post("/", authenticate, leaseFarm);
router.get("/me", authenticate, getMyFarmLeases);

// Admin routes
router.get("/", authenticate, authorize("admin"), getAllFarmLeases);
router.put("/:id", authenticate, authorize("admin"), updateFarmLease);
router.patch("/:id", authenticate, authorize("admin"), cancelFarmLease);

module.exports = router;
