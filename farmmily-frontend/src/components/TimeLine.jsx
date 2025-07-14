import React, { useState } from "react";

const Timeline = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const timelineSteps = [
    {
      id: 0,
      title: "Lease",
      description:
        "Select and lease your tree, hive or farm plot through our simple online process.",
      imageSrc: "/images/timeline/lease.png",
    },
    {
      id: 1,
      title: "Care",
      description:
        "We nurture your leased item using natural farming practices and send you regular updates.",
      imageSrc: "/images/timeline/care.png",
    },
    {
      id: 2,
      title: "Updates",
      description:
        "Receive photos and process reports about your farm investments growth and health.",
      imageSrc: "/images/timeline/update.png",
    },
    {
      id: 3,
      title: "Harvest",
      description:
        "When nature deliverers, we harvest your produce at peak ripeness for maximum quality.",
      imageSrc: "/images/timeline/harvest.png",
    },
    {
      id: 4,
      title: "Delivery",
      description:
        "Choose to have your harvest delivered to your doorstep or sold through our buyback.",
      imageSrc: "/images/timeline/delivery.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Your Farming Timeline
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Simple steps from leasing to harvesting - we handle the hard while you
          enjoy the fruits of nature
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Desktop Line */}
        <div className="hidden sm:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 z-0"></div>

        {/* Active Segment (Desktop only) */}
        {timelineSteps.map((_, index) => (
          <div
            key={index}
            className={`hidden sm:block absolute top-10 h-0.5 z-10 transition-all duration-300 ${
              index <= selectedStep ? "bg-green-500" : "bg-transparent"
            }`}
            style={{
              left: `${(index / (timelineSteps.length - 1)) * 100}%`,
              width:
                index === timelineSteps.length - 1
                  ? "0%"
                  : `${100 / (timelineSteps.length - 1)}%`,
            }}
          ></div>
        ))}

        {/* Timeline Items */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-0 relative z-20">
          {timelineSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
              onClick={() => setSelectedStep(index)}
            >
              {/* Image */}
              <div
                className={`w-20 h-20 rounded-full overflow-hidden mb-4 ${
                  selectedStep === index
                    ? "border-green-500"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <img
                  src={step.imageSrc}
                  alt={step.title}
                  className="w-20 h-20 object-cover"
                />
              </div>

              {/* Title */}
              <h3
                className={`text-lg sm:text-xl font-semibold mb-2 ${
                  selectedStep === index ? "text-green-600" : "text-gray-700"
                }`}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
