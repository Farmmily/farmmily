import React from "react";
import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Healthier food",
    description:
      "Chemical-free produce contains more nutrients and no harmful residues.",
  },
  {
    title: "Biodiversity",
    description:
      "Our farm supports 30+ bird species, beneficial insects, and native flora.",
  },
  {
    title: "Water Conservation",
    description: "Our methods use 30% less water than conventional of farming.",
  },
  {
    title: "Farmer Wellbeing",
    description:
      "No exposure to harmful chemicals for our farming team and our lands.",
  },
  {
    title: "Climate Positivity",
    description:
      "Ourfarming methods sequester carbon and reduce greenhouse emissions.",
  },
];

const NaturalFarmingMatters = () => {
  return (
    <div className="bg-[#d5e5cc] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-6 pl-10">
            Why natural farming matters
          </h2>
          <ul className="space-y-5 mb-6">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="min-w-[24px] min-h-[24px] bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="font-semibold text-green-900">
                    {item.title}:
                  </span>{" "}
                  <span className="text-gray-700">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Learn More Button */}
          <Link
            to="/about-us"
            className="inline-flex items-center text-green-800 font-semibold hover:underline border border-white bg-white rounded-xl py-1.5 px-3 ml-4"
          >
            Learn More
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src="/images/natural-farming.png"
            alt="Farm Ownership Benefits"
            className="rounded-lg w-full max-w-md mx-auto lg:mx-0 justify-end lg:pl-30"
          />
        </div>
      </div>
    </div>
  );
};

export default NaturalFarmingMatters;
