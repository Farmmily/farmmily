import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const NameBoard = ({ treeName }) => {
  const whatsappMessage = `Hello, I would like to add a personalized name board for the ${treeName} tree I leased. Please guide me through the process.`;
  const whatsappURL = `${import.meta.env.VITE_WHATSAPP_URI}${
    import.meta.env.VITE_WHATSAPP_NUMBER
  }?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="w-full border-y border-gray-300 py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <p className="text-md font-semibold text-gray-600 uppercase tracking-wide">
          Personalized Nameboard
        </p>
        <p className="text-md font-normal text-gray-800">
          At the end of the harvest, you’ll receive your custom name board — the
          same one placed on your tree. A lifelong keepsake from the farm,
          filled with memories, love, and the story of your tree.
        </p>
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#6e4b2e] text-white px-6 py-2 rounded-md text-sm hover:bg-[#5a3f27] transition"
        >
          <FaWhatsapp className="mr-2" />
          Add for ₹349
        </a>
      </div>

      {/* Right Image */}
      <div className="">
        <img
          src="/images/nameboard.jpg"
          alt="Name Board"
          className="h-48 w-full object-cover"
        />
      </div>
    </div>
  );
};

export default NameBoard;
