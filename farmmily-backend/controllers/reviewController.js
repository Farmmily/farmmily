const Review = require("../models/Review");
const Product = require("../models/Product");
const User = require("../models/User");

exports.createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const productId = req.params.productId;

    const user = await User.findOne({ uid: req.user.uid });
    if (!user) return res.status(404).json({ message: "User not found" });

    const review = new Review({
      product: productId,
      user: user._id,
      rating,
      comment,
    });

    await review.save();

    await Product.findByIdAndUpdate(productId, {
      $push: { reviews: review._id },
    });

    res.status(201).json({ message: "Review added", review });
  } catch (error) {
    res.status(500).json({ message: "Failed to add review", error });
  }
};

// Get reviews for a product
exports.getProductReviews = async (req, res) => {
  try {
    const productId = req.params.productId;
    const reviews = await Review.find({ product: productId }).populate(
      "user",
      "name email"
    );
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews", error });
  }
};

exports.deleteOwnReview = async (req, res) => {
  try {
    const reviewId = req.params.id;

    const user = await User.findOne({ uid: req.user.uid });
    if (!user) return res.status(404).json({ message: "User not found" });

    const review = await Review.findById(reviewId);
    if (!review) return res.status(404).json({ message: "Review not found" });

    // Check if the logged-in user is the owner of the review
    if (!review.user.equals(user._id)) {
      return res
        .status(403)
        .json({ message: "You can delete only your own review" });
    }

    // Remove the review
    await Review.findByIdAndDelete(reviewId);

    // Also remove reference from Product
    await Product.findByIdAndUpdate(review.product, {
      $pull: { reviews: review._id },
    });

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review", error });
  }
};
