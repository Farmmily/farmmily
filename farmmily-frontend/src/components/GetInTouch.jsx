import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa6";

const GetInTouch = () => {
  const [agreed, setAgreed] = useState(false);
  const message =
    "I am interested in the Farm located at Pollachi, Tamil Nadu. Can you provide more details?";
  const encodedMessage = encodeURIComponent(message);

  return (
    <div className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* LEFT FORM */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold  mb-2">Get in touch</h2>
          <p className="text-gray-700 mb-6">
            We'd love to hear from you. Please fill out the form and our team
            will get back to you shortly.
          </p>

          <form
            action="https://formsubmit.co/info.farmmily@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-2 border border-gray-300 rounded bg-white"
            />

            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number (required)"
              required
              className="w-full p-2 border border-gray-300 rounded bg-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              className="w-full p-2 border border-gray-300 rounded bg-white"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Message (optional)"
              className="w-full p-2 border border-gray-300 rounded bg-white"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1"
              />
              <label>
                I agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="underline text-green-700 font-medium"
                >
                  Farmmily Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!agreed}
              className={`mt-4 px-6 py-2 text-white rounded transition-all ${agreed
                  ? "bg-green-700 hover:bg-green-800"
                  : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
          <img
            src="/images/getintouch.jpg"
            alt="Farmhouse"
            className="w-full h-56 object-cover"
          />

          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-4">
                Connect with us
              </h4>
              <div className="flex items-center gap-3 mb-2 text-sm text-gray-800">
                <FaMapMarkerAlt className="text-green-600" />
                123 Farm Lane, Pollachi, Tamil Nadu
              </div>
              <div className="flex items-center gap-3 mb-2 text-sm text-gray-800">
                <FaPhone className="text-green-600" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-800">
                <FaEnvelope className="text-green-600" />
                contact@farmmily.com
              </div>

              {/* Socials */}
              <div className="flex gap-4 mb-6 text-xl text-green-800">
                <a href="https://instagram.com" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank">
                  <FaTwitter />
                </a>
                <a href="https://facebook.com" target="_blank">
                  <FaFacebook />
                </a>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`${import.meta.env.VITE_WHATSAPP_URI}${import.meta.env.VITE_WHATSAPP_NUMBER
                }?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              <FaWhatsapp />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
