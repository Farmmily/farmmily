const TreeLease = require("../models/TreeLease");
const Tree = require("../models/Tree");
const User = require("../models/User");

// Lease a tree (Customer only)
exports.leaseTree = async (req, res) => {
  try {
    const { treeId, leaseEndDate, customNameBoard, boardMessage } = req.body;

    const tree = await Tree.findById(treeId);
    if (!tree || !tree.isAvailable)
      return res.status(400).json({ message: "Tree not available for lease" });

    const lease = new TreeLease({
      user: req.user._id,
      tree: treeId,
      leaseEndDate,
      price: tree.price,
      customNameBoard,
      boardMessage,
    });

    await lease.save();

    // Mark tree as unavailable
    tree.isAvailable = false;
    await tree.save();

    // Mark user as having leased a tree
    await User.findByIdAndUpdate(req.user._id, { hasLeasedTree: true });

    res.status(201).json({ message: "Tree leased successfully", lease });
  } catch (err) {
    res.status(500).json({ message: "Leasing failed", error: err });
  }
};

// Get all leases for current user
exports.getMyLeases = async (req, res) => {
  try {
    const leases = await TreeLease.find({
      user: req.user._id,
      isDeleted: false,
    })
      .populate("tree")
      .sort({ leaseStartDate: -1 });

    res.status(200).json(leases);
  } catch (err) {
    res.status(500).json({ message: "Error fetching leases", error: err });
  }
};

// Admin: get all leases
exports.getAllLeases = async (req, res) => {
  try {
    const leases = await TreeLease.find({ isDeleted: false })
      .populate("user", "name email")
      .populate("tree", "name location");
    res.status(200).json(leases);
  } catch (err) {
    res.status(500).json({ message: "Error fetching all leases", error: err });
  }
};

exports.updateLeaseById = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const lease = await TreeLease.findByIdAndUpdate(id, updates, { new: true })
      .populate("user", "name email")
      .populate("tree", "name location");

    if (!lease) return res.status(404).json({ message: "Lease not found" });

    res.status(200).json({ message: "Lease updated", lease });
  } catch (err) {
    res.status(500).json({ message: "Error updating lease", error: err });
  }
};

exports.softDeleteLease = async (req, res) => {
  try {
    const lease = await TreeLease.findById(req.params.id);
    if (!lease || lease.isDeleted)
      return res.status(404).json({ message: "Lease not found" });

    lease.isDeleted = true;
    lease.deletedAt = new Date();
    lease.status = "Cancelled";
    await lease.save();

    res.json({ message: "Lease soft-deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Soft delete failed", error: err });
  }
};
