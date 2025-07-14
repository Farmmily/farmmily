import React from "react";
import { useNavigate } from "react-router-dom";

const SpecializedServicesHome = () => {
  const navigate = useNavigate();

  const services = [
    {
      image: "/images/home/ss1.png",
      title: "Tree Relocation & Uplifting",
    },
    {
      image: "/images/home/ss2.png",
      title: "Landscaped bunds and natural ponds",
    },
    {
      image: "/images/home/ss3.png",
      title: "Farmhouse Construction",
    },
    {
      image: "/images/home/ss4.png",
      title: "Farm Mechanization & Infrastructure",
    },
    {
      image: "/images/home/ss5.png",
      title: "Nursery & Seedling Services",
    },
    {
      image: "/images/home/ss6.png",
      title: "Farm Branding & Identity Services",
    },
  ];

  return (
    <div className="px-6 lg:px-20 py-12 text-center">
      {/* Section Heading */}
      <h2 className="text-3xl lg:text-5xl font-semibold text-[#324f14] mb-10">
        Specialized Services
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-xl pt-1 overflow-hidden flex flex-col items-center min-h-[450px]"
          >
            {/* Image */}
            <div className="w-full p-4 pt-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#324f14] mt-2 mb-4 px-4">
              {service.title}
            </h3>

            {/* Know More Button */}
            <button
              onClick={() => navigate("/farm-services#specialized-services")}
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-2 rounded-md transition mb-6"
            >
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializedServicesHome;
