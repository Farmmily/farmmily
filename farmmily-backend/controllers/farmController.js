const Farm = require("../models/Farm");

// Create a new farm
exports.createFarm = async (req, res) => {
  try {
    const farm = new Farm(req.body);
    await farm.save();
    res.status(201).json({ message: "Farm created", farm });
  } catch (err) {
    res.status(400).json({ message: "Failed to create farm", error: err });
  }
};

// Get all farms (public)
exports.getAllFarms = async (req, res) => {
  try {
    const farms = await Farm.find();
    res.status(200).json(farms);
  } catch (err) {
    res.status(500).json({ message: "Error fetching farms", error: err });
  }
};

// Get farm by ID
exports.getFarmById = async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id);
    if (!farm) return res.status(404).json({ message: "Farm not found" });
    res.status(200).json(farm);
  } catch (err) {
    res.status(500).json({ message: "Error fetching farm", error: err });
  }
};

// Update a farm
exports.updateFarm = async (req, res) => {
  try {
    const updatedFarm = await Farm.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedFarm)
      return res.status(404).json({ message: "Farm not found" });
    res.status(200).json({ message: "Farm updated", updatedFarm });
  } catch (err) {
    res.status(500).json({ message: "Error updating farm", error: err });
  }
};

// Delete a farm
exports.deleteFarm = async (req, res) => {
  try {
    const deleted = await Farm.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Farm not found" });
    res.status(200).json({ message: "Farm deleted", deleted });
  } catch (err) {
    res.status(500).json({ message: "Error deleting farm", error: err });
  }
};
