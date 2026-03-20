// const admin = require("../config/firebase");
// const User = require("../models/User");

// const authenticate = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "No token provided" });

//   try {
//     const decoded = await admin.auth().verifyIdToken(token);
//     req.user = {
//       uid: decoded.uid,
//       email: decoded.email,
//       name: decoded.name || "",
//       phone_number: decoded.phone_number || "",
//     };
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token", error: error.message });
//   }
// };

// module.exports = authenticate;
