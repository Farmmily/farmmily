import React from "react";
import AgroTourismHero from "../../components/AgroTourismHero";
import AgroGallery from "../../components/AgroGallery";
import YourStay from "../../components/YourStay";
import Footer from "../../components/FooterHome";
import MainActivities from "../../components/MainActivities";

const AgroTourism = () => {
  return (
    <>
      <AgroTourismHero />
      <div className="flex flex-col lg:flex-row min-h-[50vh] mt-0">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-screen px-12 lg:px-24 lg:mx-12 lg:p-16 overflow-hidden py-6">
          <img
            src="/images/agrotourism/explore.png"
            alt="Farm landscape with tractor"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start py-8">
          <div className="max-w-lg text-center items-center">
            {/* Main heading */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Explore the farm Life
            </h1>

            {/* Subheading */}
            <h2 className="text-lg font-semibold text-gray-700 mb-6">
              No resorts. No filters. Just real life. Lived differently.
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed text-sm lg:text-base text-center">
              Skip the hotels and crowds. At Farmmily Living, you don’t just
              stay—you belong.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm lg:text-base">
              Spend your weekend in a real village, surrounded by farmers,
              goats, tractors, and trees.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm lg:text-base">
              Live like our ancestors did—rooted in nature,connected to
              community, and breathing air the city forgot.
            </p>
          </div>
        </div>
      </div>
      <AgroGallery />
      <YourStay />
      <MainActivities />
      <Footer />
    </>
  );
};

export default AgroTourism;
