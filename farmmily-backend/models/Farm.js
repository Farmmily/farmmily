const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  size: { type: String }, // e.g., "5 acres"
  isAvailable: { type: Boolean, default: true },
  leasePeriod: { type: Number, required: true }, // in months
  price: { type: Number, required: true },
  description: { type: String },
});

module.exports = mongoose.model("Farm", farmSchema);
