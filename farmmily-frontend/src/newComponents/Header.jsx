import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/farmmilyLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [aboutOpen, setAboutOpen] = useState(false); // dropdown
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Function to check active link
  const isActive = (path) =>
    location.pathname === path
      ? "text-green-600 font-semibold"
      : "text-gray-600 hover:text-green-600";

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>

          {/* About Us Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className={`flex items-center focus:outline-none ${isActive(
                "/about"
              )}`}
            >
              About Us
              <svg
                className={`ml-1 w-4 h-4 transform transition-transform ${
                  aboutOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {aboutOpen && (
              <div className="absolute left-0 mt-2 w-30 px-2 bg-white shadow-lg">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 border-b border-gray-200 hover:text-green-600"
                  onClick={() => setAboutOpen(false)}
                >
                  Our Work
                </Link>
                <Link
                  to="/team"
                  className="block px-4 py-2 mt-1  text-gray-600 hover:bg-gray-100 border-t border-gray-200 hover:text-green-600"
                  onClick={() => setAboutOpen(false)}
                >
                  Our Team
                </Link>
              </div>
            )}
          </div>

          <Link to="/services" className={isActive("/services")}>
            Services
          </Link>
          <Link to="/portfolio" className={isActive("/portfolio")}>
            Portfolio
          </Link>
          <Link to="/managed-farming" className={isActive("/managed-farming")}>
            Managed Farming
          </Link>
          <Link to="/partner" className={isActive("/partner")}>
            Partner With Us
          </Link>
          <Link to="/insights" className={isActive("/insights")}>
            Insights
          </Link>
          <Link to="/contact" className={isActive("/contact")}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
