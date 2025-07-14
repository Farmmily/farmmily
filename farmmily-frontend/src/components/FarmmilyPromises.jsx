import React from "react";
import { FaLeaf, FaComment, FaUsers, FaMobile } from "react-icons/fa";

const FarmmilyPromises = () => {
  const promises = [
    {
      icon: <FaLeaf className="text-green-300 h-8 w-8" />,
      title: "Chemical-free farming",
      description:
        "We use only natural inputs like jeevamirtham and desi cow manure. No chemicals, no pesticides, just nature’s way.",
    },
    {
      icon: <FaComment className="text-blue-300 h-8 w-8" />,
      title: "Transparent Fallback",
      description:
        "If your lease doesn’t deliver the expected quantity or quality, we’ll switch to the best and make sure you get the real, full Farmmily experience.",
    },
    {
      icon: <FaUsers className="text-yellow-300 h-8 w-8" />,
      title: "Farmmily Experience",
      description:
        "Discover the true story of farming—learn how your food grows naturally from planting to harvest through sustainable, chemical-free practices.",
    },
    {
      icon: <FaMobile className="text-gray-300 h-8 w-8" />,
      title: "Regular Updates",
      description:
        "Stay connected with your farm through regular photos, videos, and updates about your leased tree, hive, or plot.",
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Farmmily Promises
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re committed transparency, sustainable and delivering the joy of
            farming with none of the hassle.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {promises.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f7] rounded-lg shadow-md p-6 text-left hover:shadow-lg transition"
            >
              <div className="mb-4 flex items-center justify-start">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-green-700 px-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm px-2 leading-relaxed space-y-10 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FarmmilyPromises;
