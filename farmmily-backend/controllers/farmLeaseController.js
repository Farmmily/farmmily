const FarmLease = require("../models/FarmLease");
const Farm = require("../models/Farm");
const User = require("../models/User");

// Lease a farm (customer only)
exports.leaseFarm = async (req, res) => {
  try {
    const { farmId, endDate } = req.body;

    const farm = await Farm.findById(farmId);
    if (!farm || !farm.isAvailable) {
      return res.status(400).json({ message: "Farm not available for lease" });
    }

    const lease = new FarmLease({
      user: req.user._id,
      farm: farmId,
      leasePeriod: farm.leasePeriod,
      price: farm.price,
      endDate,
    });

    await lease.save();

    // Mark farm unavailable
    farm.isAvailable = false;
    await farm.save();

    // Optionally update user
    await User.findByIdAndUpdate(req.user._id, { hasLeasedFarm: true });

    res.status(201).json({ message: "Farm leased successfully", lease });
  } catch (err) {
    res.status(500).json({ message: "Leasing failed", error: err });
  }
};

// Get leases of current user
exports.getMyFarmLeases = async (req, res) => {
  try {
    const leases = await FarmLease.find({ user: req.user._id })
      .populate("farm")
      .sort({ startDate: -1 });

    res.status(200).json(leases);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch leases", error: err });
  }
};

// Admin: Get all leases
exports.getAllFarmLeases = async (req, res) => {
  try {
    const leases = await FarmLease.find()
      .populate("user", "name email")
      .populate("farm", "name location");

    res.status(200).json(leases);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch all leases", error: err });
  }
};

// Admin: Update a lease (e.g., change status)
exports.updateFarmLease = async (req, res) => {
  try {
    const updated = await FarmLease.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Lease not found" });

    res.status(200).json({ message: "Lease updated", updated });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err });
  }
};

// Admin: Soft delete a lease (mark status as cancelled)
exports.cancelFarmLease = async (req, res) => {
  try {
    const lease = await FarmLease.findById(req.params.id);
    if (!lease) return res.status(404).json({ message: "Lease not found" });

    lease.status = "cancelled";
    await lease.save();

    // Make farm available again
    await Farm.findByIdAndUpdate(lease.farm, { isAvailable: true });

    res.status(200).json({ message: "Lease cancelled", lease });
  } catch (err) {
    res.status(500).json({ message: "Cancellation failed", error: err });
  }
};
