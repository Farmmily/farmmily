import React from "react";
import HeroImage from "/images/heroImage.png";
import HeroSection from "../components/HeroSection";
import AboutUsPreview from "../components/AboutUsPreview";
import WhyFarmmily from "../components/WhyFarmmily";
import HomeTreeStrip from "../components/HomeTreeStrip";
import InfoCard from "../components/InfoCard";
import WhenYouBecomeAFarmer from "../components/WhenYouBecomeAFarmer";
import Testimonials from "../components/Testimonials";
import FarmingCTA from "../components/FarmingCTA";
import Footer from "../components/FooterHome";
import PureFarmingSection from "../components/PureFarmingSection";
import WhatWeOfferHome from "../components/WhatWeOfferHome";
import CoreServicesHome from "../components/CoreServicesHome";
import SpecializedServices from "../components/SpecializedServices";
import SpecializedServicesHome from "../components/SpecializedServicesHome";

const Home = () => {
  return (
    <div>
      <HeroSection
        heroImage={HeroImage}
        heading="Land to Livelihood"
        subHeading="Farm development & management for NRIs, investors & landowners, done right in South India."
        button1="Own a Farm"
        button2="Contact Us"
      />
      <CoreServicesHome />
      <HomeTreeStrip />
      {/* <InfoCard /> */}
      {/* <WhenYouBecomeAFarmer /> */}
      {/* <PureFarmingSection /> */}
      <SpecializedServicesHome />
      <WhatWeOfferHome />
      <Testimonials />
      <FarmingCTA />
      <Footer />
      {/* Add more sections below */}
    </div>
  );
};

export default Home;
