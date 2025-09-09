import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/farmmilyLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to check active link
  const isActive = (path) =>
    location.pathname === path
      ? "text-green-600 font-semibold"
      : "text-gray-600 hover:text-green-600";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {logo ? (
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          ) : (
            "{Logo}"
          )}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About Us
          </Link>
          <Link to="/services" className={isActive("/services")}>
            Services
          </Link>
          <Link to="/portfolio" className={isActive("/portfolio")}>
            Portfolio
          </Link>
          <Link to="/ventures" className={isActive("/ventures")}>
            Ventures
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className={`block py-2 px-4 text-sm ${isActive("/")}`}>
            Home
          </Link>
          <Link
            to="/about"
            className={`block py-2 px-4 text-sm ${isActive("/about")}`}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className={`block py-2 px-4 text-sm ${isActive("/services")}`}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className={`block py-2 px-4 text-sm ${isActive("/portfolio")}`}
          >
            Portfolio
          </Link>
          <Link
            to="/ventures"
            className={`block py-2 px-4 text-sm ${isActive("/ventures")}`}
          >
            Ventures
          </Link>
          <Link
            to="/partner"
            className={`block py-2 px-4 text-sm ${isActive("/partner")}`}
          >
            Partner With Us
          </Link>
          <Link
            to="/insights"
            className={`block py-2 px-4 text-sm ${isActive("/insights")}`}
          >
            Insights
          </Link>
          <Link
            to="/contact"
            className={`block py-2 px-4 text-sm ${isActive("/contact")}`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
