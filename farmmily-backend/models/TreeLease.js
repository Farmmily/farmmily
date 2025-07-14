const mongoose = require("mongoose");

const treeLeaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tree: { type: mongoose.Schema.Types.ObjectId, ref: "Tree", required: true },
  leaseStartDate: { type: Date, default: Date.now },
  leaseEndDate: { type: Date, required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Active", "Expired", "Cancelled"],
    default: "Active",
  },
  customNameBoard: { type: Boolean, default: false },
  boardMessage: { type: String },
  isDeleted: { type: Boolean, default: false }, // 👈 soft delete flag
  deletedAt: { type: Date }, // 👈 optional
});

module.exports = mongoose.model("TreeLease", treeLeaseSchema);
