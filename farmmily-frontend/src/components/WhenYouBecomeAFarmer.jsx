import React from "react";
import FarmerHome1 from "/images/farmerHome1.png";
import { useNavigate } from "react-router-dom";
export default function WhenYouBecomeAFarmer() {
  const navigate = useNavigate();
  const benefits = [
    { img: "/images/farmerHome1.png", text: "Choose, Lease & Relax" },
    { img: "/images/farmerHome2.png", text: "Track your Growth" },
    { img: "/images/farmerHome3.png", text: "Recieve your Harvest" },
    { img: "/images/farmerHome4.png", text: "Share or Sell the Extra" },
  ];

  return (
    <section
      className="relative bg-[url('/images/whenFarmer.png')] bg-cover bg-no-repeat bg-center"
      style={{ backgroundBlendMode: "lighten", backgroundColor: "#ffffffaa" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        {/* Button */}
        <button
          className="bg-green-600 text-white px-8 py-2 rounded-lg text-base font-semibold mb-6 hover:bg-green-700 transition"
          onClick={() => navigate("/contact-us")}
        >
          Become a Farmer
        </button>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-8">
          When You Become a Farmer with Farmmily
        </h2>

        {/* Grid of Images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {benefits.map((item, idx) => (
            <div key={idx} className="text-center space-y-3">
              <img
                src={item.img}
                alt={item.text}
                className="w-28 h-28 rounded-full object-cover "
              />
              <p className="text-green-800 text-sm font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
