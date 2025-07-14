// GET /admin/stats/orders
const Order = require("../models/Order");
const TreeLease = require("../models/TreeLease");
const FarmLease = require("../models/FarmLease");
const StayBooking = require("../models/Stay");

exports.getTotalOrders = async (req, res) => {
  try {
    const count = await Order.countDocuments();
    res.json({ totalOrders: count });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch order stats", error: err });
  }
};

exports.getTotalLeases = async (req, res) => {
  try {
    const [tree, farm, stay] = await Promise.all([
      TreeLease.countDocuments(),
      FarmLease.countDocuments(),
      StayBooking.countDocuments(),
    ]);

    res.json({ treeLeases: tree, farmLeases: farm, stayBookings: stay });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch lease stats", error: err });
  }
};

exports.getRevenueStats = async (req, res) => {
  try {
    const [orderRevenue, treeRevenue, farmRevenue, stayRevenue] =
      await Promise.all([
        Order.aggregate([
          { $group: { _id: null, total: { $sum: "$totalPrice" } } },
        ]),
        TreeLease.aggregate([
          { $group: { _id: null, total: { $sum: "$price" } } },
        ]),
        FarmLease.aggregate([
          { $group: { _id: null, total: { $sum: "$price" } } },
        ]),
        StayBooking.aggregate([
          { $group: { _id: null, total: { $sum: "$price" } } },
        ]),
      ]);

    res.json({
      orderRevenue: orderRevenue[0]?.total || 0,
      treeRevenue: treeRevenue[0]?.total || 0,
      farmRevenue: farmRevenue[0]?.total || 0,
      stayRevenue: stayRevenue[0]?.total || 0,
      totalRevenue:
        (orderRevenue[0]?.total || 0) +
        (treeRevenue[0]?.total || 0) +
        (farmRevenue[0]?.total || 0) +
        (stayRevenue[0]?.total || 0),
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to calculate revenue", error: err });
  }
};

const User = require("../models/User");

exports.getUserGrowth = async (req, res) => {
  try {
    const growth = await User.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } },
    ]);

    res.json(growth);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch user growth", error: err });
  }
};
