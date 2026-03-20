// // models/User.js

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     uid: { type: String, required: true, unique: true }, // Firebase UID
//     name: { type: String },
//     email: { type: String, required: true, unique: true },
//     phone: { type: String, sparse: true },
//     role: {
//       type: String,
//       enum: ["admin", "customer", "farmer"],
//       default: "customer",
//     },
//     hasLeasedTree: { type: Boolean, default: false },
//     joinDate: { type: Date, default: Date.now },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);
