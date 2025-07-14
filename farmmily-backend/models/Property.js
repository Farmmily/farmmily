// models/Property.js

const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: String,
  pricePerNight: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  amenities: [String],
  images: [String], // URLs of property images
  maxGuests: { type: Number, default: 2 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Property", propertySchema);
