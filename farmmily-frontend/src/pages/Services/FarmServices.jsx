import React from "react";
import WhatWeDo from "../../components/WhatWeDo";
import Footer from "../../components/FooterHome";
import OurWorksGrid from "../../components/OurWorksGrid";
import SpecializedServices from "../../components/SpecializedServices";

const FarmServices = () => {
  return (
    <>
      <div
        className="w-full h-[50vh] bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/farmServices/hero.png')" }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4 drop-shadow-lg">
          Your Land. Our Expertise. Real Results.
        </h1>
      </div>
      <h2 className="text-xl font-normal text-center mt-20 px-20">
        Whether you're an NRI, investor, or first-time landowner
      </h2>
      <h2 className="text-xl font-normal font-sans text-center mt-5 mb-5 px-20 leading-relaxed">
        <span>
          <strong>Farmmily</strong>{" "}
        </span>
        turns your land into a productive, profitable farm with on-ground
        support and experienced planning.
      </h2>
      <h1 className="text-4xl text-center font-bold text-gray-800 mt-10">
        What we do for you
      </h1>
      {/* Farm Development */}
      <div className="flex flex-col lg:flex-row items-center min-h-[50vh]">
        {/* Left side - Image (slightly bigger than text card) */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto p-2 lg:px-12 overflow-hidden mt-8">
          <img
            src="/images/farmServices/farmDevelopment.png"
            alt="Farm landscape with tractor"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right side - Text card, centered, slightly overlapping */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-2">
          <div className="bg-[#324f14] text-white rounded-lg px-6 py-8 lg:py-20 w-full max-w-xl text-center shadow-lg">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-2">
              Farm Development
            </h1>
            <h2 className="text-lg lg:text-xl font-medium mb-4">
              Start from Scratch. We'll Build the Farm
            </h2>
            <p className="text-sm lg:text-base mb-4 leading-snug">
              Have a raw plot or unused land? We turn it into a fully functional
              farm — step by step.
            </p>

            {/* What We Do */}
            <div className="mb-4">
              <h3 className="text-base font-semibold mb-2">What We Do:</h3>
              <div className="bg-[#406520] p-3 rounded-lg text-left">
                <ul className="space-y-1 text-sm lg:text-base">
                  {[
                    "Farm layout & zoning",
                    "Soil testing & irrigation (borewell, drip, tank)",
                    "Infrastructure setup: fencing, sheds, roads",
                    "Tree/crop planning & planting",
                    "Phase-wise execution with full budget planning",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best For */}
            <div className="text-left mt-4">
              <h3 className="text-base font-semibold mb-2 text-center">
                8+ farms successfully developed from scratch across Tamil Nadu
                <br />
                <div className="text-left ml-8">Best for:</div>
              </h3>
              <ul className="space-y-1 pl-4 text-sm lg:text-base">
                {[
                  "New landowners",
                  "Agro-tourism planners",
                  "Idle land holders",
                ].map((aud, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------- */}

      <div className="flex flex-col lg:flex-row-reverse items-center min-h-[50vh]">
        {/* Right side - Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto p-2 lg:px-12 overflow-hidden mt-8">
          <img
            src="/images/farmServices/FarmManagement.png"
            alt="Farm Management"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Left side - Text card */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-2">
          <div className="bg-[#324f14] text-white rounded-lg px-6 py-8 lg:py-20 w-full max-w-xl text-center shadow-lg">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-2">
              Farm Management
            </h1>
            <h2 className="text-lg lg:text-xl font-medium mb-4">
              We Manage. You Monitor.
            </h2>
            <p className="text-sm lg:text-base mb-4 leading-snug">
              Focus on your life — we’ll take care of your farm operations with
              transparent, reliable updates.
            </p>

            {/* Includes */}
            <div className="mb-4">
              <h3 className="text-base font-semibold mb-2">Includes:</h3>
              <div className="bg-[#406520] p-3 rounded-lg text-left">
                <ul className="space-y-1 text-sm lg:text-base">
                  {[
                    "Daily supervision & labor management",
                    "Crop planning & seasonal strategy",
                    "Harvest coordination & vendor management",
                    "Monthly progress reports with images",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best For */}
            <div className="text-left mt-4">
              <h3 className="text-base font-semibold mb-2 text-center">
                250+ acres managed across Tamil Nadu, Kerala & Karnataka
                <br />
                <div className="text-left ml-8">Best for:</div>
              </h3>
              <ul className="space-y-1 pl-4 text-sm lg:text-base">
                {["NRIs", "Busy professionals", "Passive landowners"].map(
                  (aud, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      <span>{aud}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------- */}
      {/* Farm Consulting */}
      <div className="flex flex-col lg:flex-row items-center min-h-[50vh]">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto p-2 lg:px-12 overflow-hidden mt-8">
          <img
            src="/images/farmServices/farmConsulting.png"
            alt="Farm Consulting"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right side - Text card */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-2">
          <div className="bg-[#324f14] text-white rounded-lg px-6 py-8 lg:py-20 w-full max-w-xl text-center shadow-lg">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-2">
              Farm Consulting
            </h1>
            <h2 className="text-lg lg:text-xl font-medium mb-4">
              Expert Guidance from 25+ Years in the Field
            </h2>
            <p className="text-sm lg:text-base mb-4 leading-snug">
              Unsure where to start? We’ll help you plan, invest, or transition
              to a better farm model — with real-world insights.
            </p>

            {/* Our Consulting Covers */}
            <div className="mb-4">
              <h3 className="text-base font-semibold mb-2">
                Our Consulting Covers:
              </h3>
              <div className="bg-[#406520] p-3 rounded-lg text-left">
                <ul className="space-y-1 text-sm lg:text-base">
                  {[
                    "Land & crop selection based on region",
                    "Transitioning to organic/natural farming",
                    "Input sourcing & cost control",
                    "1-on-1 calls or on-site visits",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best For */}
            <div className="text-left mt-4">
              <h3 className="text-base font-semibold mb-2 text-center">
                Led by senior consultants with 25+ years of experience
                <br />
                <div className="text-left ml-8">Best for:</div>
              </h3>
              <ul className="space-y-1 pl-4 text-sm lg:text-base">
                {[
                  "New farmers",
                  "Transitioning landowners",
                  "Agro-curious investors",
                ].map((aud, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------- */}
      <div className="mt-8 w-full h-96 relative">
        {/* Background Image */}
        <img
          src="/images/farmServices/works.png"
          alt="Our Works"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800/15 bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl lg:text-7xl font-bold mb-2">Our Works</h1>
          <p className="text-lg lg:text-4xl font-light tracking-wide">
            Designed Farms. Built Futures.
          </p>
        </div>
      </div>
      <OurWorksGrid />
      <section id="specialized-services">
        <SpecializedServices />
      </section>
      <WhatWeDo />
      <Footer />
    </>
  );
};

export default FarmServices;
