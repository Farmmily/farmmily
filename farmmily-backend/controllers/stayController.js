const Stay = require("../models/Stay");
const Property = require("../models/Property");

// Book a stay (User)
exports.bookStay = async (req, res) => {
  try {
    const { propertyId, checkIn, checkOut, guests } = req.body;
    const property = await Property.findById(propertyId);

    if (!property || !property.isAvailable) {
      return res.status(400).json({ message: "Property unavailable" });
    }

    const days = Math.ceil(
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = days * property.pricePerNight;

    const stay = new Stay({
      user: req.user._id,
      property: propertyId,
      checkIn,
      checkOut,
      guests,
      totalPrice,
    });

    await stay.save();
    res.status(201).json({ message: "Stay booked", stay });
  } catch (err) {
    res.status(500).json({ message: "Booking failed", error: err });
  }
};

// Get current user's stays
exports.getMyStays = async (req, res) => {
  try {
    const stays = await Stay.find({ user: req.user._id }).populate("property");
    res.status(200).json(stays);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err });
  }
};

// Admin: Get all stays
exports.getAllStays = async (req, res) => {
  try {
    const stays = await Stay.find()
      .populate("user", "name email")
      .populate("property", "name location");
    res.status(200).json(stays);
  } catch (err) {
    res.status(500).json({ message: "Admin fetch failed", error: err });
  }
};
