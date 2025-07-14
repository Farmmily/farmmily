import React from "react";

const CoreServicesHome = () => {
  const services = [
    {
      image: "/images/farmServices/farmDevelopment.png",
      title: "Farm Development",
      description:
        "Start from raw land. We’ll plan, design, and build a working farm from scratch",
    },
    {
      image: "/images/farmServices/FarmManagement.png",
      title: "Farm Management",
      description:
        "We manage your existing farm end-to-end while you stay informed from anywhere",
    },
    {
      image: "/images/farmServices/farmConsulting.png",
      title: "Farm Consulting",
      description:
        "Need guidance before starting? Our senior consultants help you plan with confidence.",
    },
  ];

  return (
    <div className="px-6 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center rounded-xl overflow-hidden w-full lg:w-1/3 min-h-[500px]"
          >
            {/* Image Section */}
            <div className="w-full h-4/5 px-6 pt-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center justify-center h-1/5 px-4 py-4 text-center">
              <h3 className="text-xl font-semibold text-[#324f14]">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreServicesHome;
