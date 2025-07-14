const Tree = require("../models/Tree");

// Create new tree (Admin only)
exports.createTree = async (req, res) => {
  try {
    const tree = new Tree(req.body);
    await tree.save();
    res.status(201).json({ message: "Tree created", tree });
  } catch (err) {
    res.status(400).json({ message: "Failed to create tree", error: err });
  }
};

// Get all trees (Public)
exports.getAllTrees = async (req, res) => {
  try {
    const trees = await Tree.find();
    res.status(200).json(trees);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch trees", error: err });
  }
};

// Get tree by ID (Public)
exports.getTreeById = async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id);
    if (!tree) return res.status(404).json({ message: "Tree not found" });
    res.json(tree);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tree", error: err });
  }
};

// Update tree (Admin only)
exports.updateTree = async (req, res) => {
  try {
    const updated = await Tree.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Tree not found" });
    res.json({ message: "Tree updated", updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating tree", error: err });
  }
};

// Delete tree (Admin only)
exports.deleteTree = async (req, res) => {
  try {
    const deleted = await Tree.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Tree not found" });
    res.json({ message: "Tree deleted", deleted });
  } catch (err) {
    res.status(500).json({ message: "Error deleting tree", error: err });
  }
};
