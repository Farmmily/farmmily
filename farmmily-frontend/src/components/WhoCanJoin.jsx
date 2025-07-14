import React from "react";
const points = [
  "Family and Friends",
  "Organic Farming Enthusiasts",
  "Organic Store",
  "Food to Table Restaurants",
];

const WhoCanJoin = () => {
  return (
    <div className="bg-[#d5e5cc] py-16 px-4 mt-18">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center ">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src="/images/whocanjoin.png"
            alt="Farm Visit"
            className="rounded-lg w-full max-w-md mx-auto lg:mx-0"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl font-bold mb-6 uppercase">Who can join?</h2>

          <ul className="list-disc list-inside text-left space-y-3 text-gray-800">
            {points.map((point, idx) => (
              <li key={idx} className="text-2xl">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoin;
