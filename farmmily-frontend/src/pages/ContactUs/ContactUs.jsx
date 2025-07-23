// src/pages/ContactUs.jsx
import React from "react";
import ExploreProducts from "../../components/ExploreProducts";
import Footer from "../../components/FooterHome";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import GetInTouch from "../../components/GetInTouch";
const ContactUs = () => {
  const message = "Hi, I’d like to register as a farmer with Farmmily!";
  const encodedMessage = encodeURIComponent(message);
  return (
    <>
      <GetInTouch />
      <div
        className="relative w-full h-auto bg-center flex items-end pt-24"
        style={{
          backgroundImage: "url('/images/contactUs.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative w-full px-6 md:px-20 pb-16 flex flex-col md:flex-row justify-between items-start md:items-end text-white">
          {/* Left side - Address */}
          <div className="max-w-md mb-30 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Address</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              FARMMILY FARMS AND FOODS
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              1401, Kamatchipuram, Sendamangalam West Village, Pallapatti Via,
              Aravakurichi Taluk, Karur – 639205
            </p>
          </div>

          {/* Right side - Contact Info */}
          <div className="space-y-4 text-sm md:text-base mb-10 mr-5">
            <div className="flex items-center gap-3">
              <MdEmail className="text-white text-2xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p>contact@farmmily.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className="text-white text-2xl" />
              <div>
                <p className="font-semibold">Phone/WhatsApp</p>
                <p>+91 7708847977</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
