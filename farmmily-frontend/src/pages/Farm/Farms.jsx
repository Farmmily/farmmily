import React from "react";
import HeroFarm from "/images/heroFarm.png";
import HeroSection from "../../components/HeroSection";
import OurProductsSection from "../../components/OurProducts";
import Timeline from "../../components/TimeLine";
import FarmmilyPromises from "../../components/FarmmilyPromises";
import NaturalFarmingMatters from "../../components/NaturalFarmingMatters";
import WhoCanJoin from "../../components/WhoCanJoin";
import GetInTouch from "../../components/GetInTouch";
import Footer from "../../components/FooterHome";

const Farms = () => {
  return (
    <>
      <HeroSection
        heroImage={HeroFarm}
        heading="Welcome to Farming Without the Hassle"
        subHeading="Lease a tree or plot. We’ll farm it for you — naturally and transparently."
        button1="Own a Farm"
        button2="Contact Us"
      />
      <OurProductsSection />
      <Timeline />
      <FarmmilyPromises />
      <div className="hidden md:block">
        <NaturalFarmingMatters />
        <WhoCanJoin />
      </div>

      <div className="sm:bg-[#d5e5cc] sm:py-16 sm:px-4 sm:mt-18 hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full text-center flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold  mb-4">
              You’ll Never Be Left Out
            </h2>
            <p className="text-2xl text-gray-800 max-w-md">
              Got Extra?? we’ll happily buy it back or help you Find New Homes
              for It
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src="/images/leftout.png"
              alt="Buy Back Program"
              className="rounded-lg w-full max-w-md mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>

      <div className="md:w-full md:flex md:flex-col md:items-center md:justify-center px-4 sm:px-6 md:px-12 hidden">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-20 text-gray-800 uppercase">
          ONE TREE LEASED
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-relaxed text-center mb-12 text-gray-800 uppercase">
          ONE SAPLING PLANTED
        </h1>
        <img
          src="/images/ownAFarm_img.png"
          alt="own_a_farm"
          className="max-w-full h-auto"
        />
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-snug text-center text-gray-800 uppercase mt-2">
          ONE SAPLING TODAY
        </h1>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-snug text-center text-gray-800 uppercase mb-12">
          CLEAN AIR TOMORROW
        </h1>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Farms;
