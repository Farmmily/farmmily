import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./newPages/HomePage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Products from "./pages/Products/Products";
import TreeDetails from "./pages/Trees/TreeDetails";
import Orders from "./pages/Orders/Orders";
import Profile from "./pages/Profile/Profile";
import AdminDashboard from "./pages/Admin/Dashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import About from "./newPages/About";
import Farms from "./pages/Farm/Farms";
import ContactUs from "./newPages/ContactUs";
import BeeHive from "./pages/Farm/BeeHive";
import MiniFarmPlot from "./pages/Farm/MiniFarmPlot";
import FarmServices from "./pages/Services/FarmServices";
import AgroTourism from "./pages/AgroTourism/AgroTourism";
import NotFound from "./components/NotFound";
import ComingSoon from "./components/ComingSoon";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./newComponents/Header";
import Footer from "./components/FooterHome";
import Services from "./newPages/Services";
import PartnerWithUs from "./newPages/PartnerWithUs";
import Portfolio from "./newPages/Portfolio";
import ManagedFarming from "./newPages/ManagedFarming";
import Team from "./newPages/Team";
import Insights from "./newPages/Insights";
function App() {
  const wpLink = `${import.meta.env.VITE_WHATSAPP_URI}${
    import.meta.env.VITE_WHATSAPP_NUMBER
  }`;
  const whatSappNumber = `${import.meta.env.VITE_WHATSAPP_NUMBER}`;
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/own-a-farm" element={<Farms />} />
        <Route path="/products" element={<ComingSoon />} />
        <Route path="/own-a-farm/:treeSlug" element={<TreeDetails />} />
        <Route path="/bee-hive" element={<BeeHive />} /> */}
        {/* <Route path="/mini-plot" element={<MiniFarmPlot />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/partner" element={<PartnerWithUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/managed-farming" element={<ManagedFarming />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/insights" element={<Insights />} />
        {/* <Route path="/farm-services" element={<FarmServices />} /> */}
        {/* <Route path="/agro-tourism" element={<AgroTourism />} /> */}

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

      {/* WhatsApp Icon Component */}
      {/* <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 bg-white bg-opacity-80 px-4 py-2 rounded-full shadow-md hover:bg-opacity-100 transition-opacity duration-300 sm:px-6 sm:py-3 lg:px-4 lg:py-2">
        <a
          href={wpLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-700 font-medium"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
          <span className="hidden sm:block">{whatSappNumber}</span>{" "}
          
        </a>
      </div> */}
    </Router>
  );
}

export default App;
