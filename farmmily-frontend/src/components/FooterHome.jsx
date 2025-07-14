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

      <div className="bg-[#126a3f] text-gray-100 text-sm px-6 sm:px-16 py-3 flex flex-col sm:flex-row justify-between items-center font-sans mt-4">
        <span>© Farmmily 2025, All right reserved.</span>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </>
  );
}
