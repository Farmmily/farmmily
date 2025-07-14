const express = require("express");
const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  softDeleteOrder,
} = require("../controllers/orderController");

const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

// Customer
router.post("/", authenticate, placeOrder);
router.get("/my", authenticate, getMyOrders);

// Admin
router.get("/", authenticate, authorize("admin"), getAllOrders);
router.put("/:id", authenticate, authorize("admin"), updateOrderStatus);
router.delete("/:id", authenticate, authorize("admin"), softDeleteOrder);

module.exports = router;
