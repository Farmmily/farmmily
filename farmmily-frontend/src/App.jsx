import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Products from "./pages/Products/Products";
import TreeDetails from "./pages/Trees/TreeDetails";
import Orders from "./pages/Orders/Orders";
import Profile from "./pages/Profile/Profile";
import AdminDashboard from "./pages/Admin/Dashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import About from "./pages/AboutUs/About";
import Farms from "./pages/Farm/Farms";
import ContactUs from "./pages/ContactUs/ContactUs";
import BeeHive from "./pages/Farm/BeeHive";
import MiniFarmPlot from "./pages/Farm/MiniFarmPlot";
import FarmServices from "./pages/Services/FarmServices";
import AgroTourism from "./pages/AgroTourism/AgroTourism";
import NotFound from "./components/NotFound";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/own-a-farm" element={<Farms />} />
        <Route path="/products" element={<ComingSoon />} />
        <Route path="/own-a-farm/:treeSlug" element={<TreeDetails />} />
        <Route path="/bee-hive" element={<BeeHive />} />
        <Route path="/mini-plot" element={<MiniFarmPlot />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/farm-services" element={<FarmServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/agro-tourism" element={<AgroTourism />} />

        {/* Protected Routes */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
