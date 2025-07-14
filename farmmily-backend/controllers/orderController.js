const Order = require("../models/Order");

// Customer places an order
exports.placeOrder = async (req, res) => {
  try {
    const { products, totalAmount } = req.body;

    const order = new Order({
      user: req.user._id,
      products,
      totalAmount,
    });

    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Order placement failed", error: err });
  }
};

// Get all orders of logged-in user
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id, isDeleted: false })
      .populate("products.product", "name price")
      .sort({ orderedAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders", error: err });
  }
};

// Admin: Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ isDeleted: false })
      .populate("user", "name email")
      .populate("products.product", "name price");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch all orders", error: err });
  }
};

// Admin: Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Order not found" });

    res.json({ message: "Order status updated", updated });
  } catch (err) {
    res.status(500).json({ message: "Failed to update order", error: err });
  }
};

// Admin: Soft delete an order
exports.softDeleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );

    if (!deleted) return res.status(404).json({ message: "Order not found" });

    res.json({ message: "Order deleted (soft)", deleted });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete order", error: err });
  }
};
