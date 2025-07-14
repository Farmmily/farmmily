const User = require("../models/User");

// Create or find user based on Firebase UID
exports.registerOrLoginUser = async (req, res) => {
  const { uid, name, email, phone_number } = req.user;

  try {
    const user = await User.findOneAndUpdate(
      { $or: [{ uid }, { email }] },
      {
        $setOnInsert: {
          uid,
          name: name || "",
          email,
          phone: phone_number || "",
        },
      },
      { new: true, upsert: true }
    );

    return res.status(200).json({ message: "Login OK", user });
  } catch (err) {
    console.error("registerOrLoginUser error", err);
    return res
      .status(500)
      .json({ message: "Error creating or fetching user", error: err.message });
  }
};

// Admin only: Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v");
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: err.message });
  }
};

// Admin only: Update role
exports.updateUserRole = async (req, res) => {
  const { uid } = req.params;
  const { role } = req.body;

  if (!["admin", "customer", "farmer"].includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }

  try {
    const user = await User.findOneAndUpdate({ uid }, { role }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "Role updated", user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating role", error: err.message });
  }
};
