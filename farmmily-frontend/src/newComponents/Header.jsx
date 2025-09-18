import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/new_logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  // Active link style
  const isActive = (path) =>
    location.pathname === path
      ? "text-green-600 font-semibold"
      : "text-gray-600 hover:text-green-600";

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        ref={menuRef}
        className="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

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
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600"
                  onClick={() => {
                    setAboutOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Our Work
                </Link>
                <Link
                  to="/team"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600"
                  onClick={() => {
                    setAboutOpen(false);
                    setIsOpen(false);
                  }}
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col md:hidden">
            <Link
              to="/"
              className="px-6 py-3 border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Dropdown */}
            <div className=" border-gray-200" ref={dropdownRef}>
              <button
                className="w-full text-left px-6 py-3 flex justify-start items-center gap-6"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                Explore
                <span>{aboutOpen ? "▲" : "▼"}</span>
              </button>
              {aboutOpen && (
                <div className="pl-6 pb-2">
                  <Link
                    to="/about"
                    className="block py-2 pl-6"
                    onClick={() => {
                      setIsOpen(false);
                      setAboutOpen(false);
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/team"
                    className="block py-2 pl-6"
                    onClick={() => {
                      setIsOpen(false);
                      setAboutOpen(false);
                    }}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className="px-6 py-3  border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="px-6 py-3  border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/managed-farming"
              className="px-6 py-3  border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Managed Farming
            </Link>
            <Link
              to="/partner"
              className="px-6 py-3 border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Partner With Us
            </Link>
            <Link
              to="/insights"
              className="px-6 py-3  border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Insights
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
