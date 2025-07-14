// models/Stay.js

const mongoose = require("mongoose");

const staySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: { type: Number, default: 1 },
  status: {
    type: String,
    enum: ["Booked", "CheckedIn", "CheckedOut", "Cancelled"],
    default: "Booked",
  },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Stay", staySchema);
