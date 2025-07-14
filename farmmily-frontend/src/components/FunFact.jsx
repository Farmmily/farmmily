import React from "react";

const FunFact = ({ text, badgeImage }) => {
  return (
    <div className="relative w-full py-2 px-2 bg-[#d7e7bb] text-center rounded-md mt-24 mb-8">
      {/* Better-positioned Fun Fact Badge */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-28 h-28 z-10">
        <img
          src={badgeImage}
          alt="Fun Fact Badge"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Fun Fact Text */}
      <h3 className="text-md md:text-2xl font-normal text-green-900 max-w-3xl mx-auto mt-8 leading-relaxed">
        {text}
      </h3>
    </div>
  );
};

export default FunFact;
