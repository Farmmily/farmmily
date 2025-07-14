const User = require("../models/User");

const authorize = (...roles) => {
  return async (req, res, next) => {
    const email = req.user.email;
    const user = await User.findOne({ email });

    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
};

module.exports = authorize;
