const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

router.get(
  "/orders",
  authenticate,
  authorize("admin"),
  statsController.getTotalOrders
);
router.get(
  "/leases",
  authenticate,
  authorize("admin"),
  statsController.getTotalLeases
);
router.get(
  "/revenue",
  authenticate,
  authorize("admin"),
  statsController.getRevenueStats
);
router.get(
  "/user-growth",
  authenticate,
  authorize("admin"),
  statsController.getUserGrowth
);

module.exports = router;
