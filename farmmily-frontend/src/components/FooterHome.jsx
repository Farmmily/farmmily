import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#202e12] text-white py-10 px-6 sm:px-16 font-sans">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Left Column */}
          <div>
            <img
              src="/images/farmmilyLogo.png"
              alt="Farmmily Logo"
              className="h-10 mb-4"
            />
            <p className="text-sm text-gray-300 font-light leading-relaxed tracking-wide">
              Bringing farms closer to you since 2025
            </p>
          </div>

          {/* Middle Column - Offerings */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Offerings</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-light leading-relaxed tracking-wide">
              <li>
                <Link
                  to="/own-a-farm/bulk-leasing"
                  className="hover:text-white"
                >
                  Tree Ownership
                </Link>
              </li>
              <li>
                <Link to="/mini-plot" className="hover:text-white">
                  Mini Plot Farms
                </Link>
              </li>
              <li>
                <Link to="/agro-tourism" className="hover:text-white">
                  Farm Stay
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Farm Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-light leading-relaxed tracking-wide">
              <li>
                <Link to="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/own-a-farm" className="hover:text-white">
                  Our Farms
                </Link>
              </li>
              <li>
                <Link to="/farm-services" className="hover:text-white">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-[#126a3f] text-gray-100 text-xs sm:text-sm px-6 sm:px-16 py-3 flex flex-col sm:flex-row justify-between items-center font-sans mt-4">
        <span>© 2026 Farmmily Agro Infra Developers Pvt Ltd. All Rights Reserved.</span>
        <div className="flex space-x-3 mt-2 sm:mt-0 text-xs">
          <a
            href="https://www.linkedin.com/company/farmmily/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1 text-xs"
          >
            <FaLinkedinIn className="text-xs" />
            <span className="text-xs">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/farmmily_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1 text-xs"
          >
            <FaInstagram className="text-xs" />
            <span className="text-xs">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/p/Farmmily-61574169628061/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1 text-xs"
          >
            <FaFacebookF className="text-xs" />
            <span className="text-xs">Facebook</span>
          </a>
          <a
            href="https://www.youtube.com/@FARMMILYAGROINFRADEVELOPERS/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1 text-xs"
          >
            <span className="text-xs">YouTube</span>
          </a>
        </div>
      </div>
    </>
  );
}
