const Property = require("../models/Property");

// Create Property (Admin only)
exports.createProperty = async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json({ message: "Property created", property });
  } catch (err) {
    res.status(400).json({ message: "Creation failed", error: err });
  }
};

// Get all Properties (Public)
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find({ isAvailable: true });
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err });
  }
};

// Get property by ID (Public)
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: "Not found" });
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err });
  }
};

// Update property (Admin only)
exports.updateProperty = async (req, res) => {
  try {
    const updated = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Updated", updated });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err });
  }
};

// Delete property (Admin only)
exports.deleteProperty = async (req, res) => {
  try {
    const deleted = await Property.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted", deleted });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err });
  }
};
