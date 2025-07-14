const express = require("express");
const router = express.Router();

const {
  createTree,
  getAllTrees,
  getTreeById,
  updateTree,
  deleteTree,
} = require("../controllers/treeController");

const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

// Public routes
router.get("/", getAllTrees);
router.get("/:id", getTreeById);

// Admin only routes
router.post("/", authenticate, authorize("admin"), createTree);
router.put("/:id", authenticate, authorize("admin"), updateTree);
router.delete("/:id", authenticate, authorize("admin"), deleteTree);

module.exports = router;
