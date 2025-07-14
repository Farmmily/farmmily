const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    information: String,
    description: String,
    healthBenefits: String,
    usedFor: String,
    ingredients: String,
    shelfLife: String,
    img: String,
    price: { type: Number, required: true },
    quantity: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
