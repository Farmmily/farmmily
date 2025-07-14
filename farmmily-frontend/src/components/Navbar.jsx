import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkStyle =
    "px-2 py-1 rounded-md transition font-normal hover:text-green-700";
  const activeStyle =
    "border border-green-500 text-green-700 font-medium bg-green-100/40";

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Our Services", path: "/farm-services" },
    { label: "Own your farm", path: "/own-a-farm" },
    { label: "Agro Tourism", path: "/agro-tourism" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact us", path: "/contact-us" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between relative z-25">
      {/* Logo */}
      <div
        className="flex items-center text-xl font-bold text-green-700 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="/images/farmmilyLogo.png"
          alt="Farmmily Logo"
          className="h-8 mr-2"
        />
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-2xl text-green-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Nav Links */}
      <div
        className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:justify-center transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 px-6 py-4 md:p-0">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)} // close on mobile click
              className={({ isActive }) =>
                `${navLinkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
