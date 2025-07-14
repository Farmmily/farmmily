// routes/reviewRoutes.js

const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createReview,
  getProductReviews,
  deleteOwnReview,
} = require("../controllers/reviewController");

const authenticate = require("../middlewares/authenticate");

// Add a review to a product
router.post("/", authenticate, createReview);

// Get all reviews for a product
router.get("/", getProductReviews);
router.delete("/:id", authenticate, deleteOwnReview);

module.exports = router;
