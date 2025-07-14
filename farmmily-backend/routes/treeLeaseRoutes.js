const express = require("express");
const router = express.Router();
const {
  leaseTree,
  getMyLeases,
  getAllLeases,
  updateLeaseById,
  softDeleteLease,
} = require("../controllers/treeLeaseController");

const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

// Customers
router.post("/", authenticate, authorize("customer"), leaseTree);
router.get("/my", authenticate, authorize("customer"), getMyLeases);

// Admin
router.get("/", authenticate, authorize("admin"), getAllLeases);
router.put("/:id", authenticate, authorize("admin"), updateLeaseById); // <-- This one
router.delete("/:id", authenticate, authorize("admin"), softDeleteLease);

module.exports = router;
