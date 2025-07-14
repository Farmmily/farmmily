const mongoose = require("mongoose");

const treeSchema = new mongoose.Schema({
  name: String,
  category: String,
  isAvailable: { type: Boolean, default: true },
  price: Number,
  leasePeriod: String,
  desc: String,
  location: String,
  treeAge: String,
  harvestSeason: String,
  yield: String,
});

module.exports = mongoose.model("Tree", treeSchema);
