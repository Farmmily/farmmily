const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const treeRoutes = require("./routes/treeRoutes");
const treeLeaseRoutes = require("./routes/treeLeaseRoutes");
const orderRoutes = require("./routes/orderRoutes");
const farmRoutes = require("./routes/farmRoutes");
const farmLeaseRoutes = require("./routes/farmLeaseRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const stayRoutes = require("./routes/stayRoutes");
const adminStats = require("./routes/adminStats");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/products/:productId/reviews", reviewRoutes);
app.use("/api/trees", treeRoutes);
app.use("/api/leases", treeLeaseRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/farms", farmRoutes);
app.use("/api/farm-leases", farmLeaseRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/stays", stayRoutes);
app.use("/api/admin/stats", adminStats);

module.exports = app;
