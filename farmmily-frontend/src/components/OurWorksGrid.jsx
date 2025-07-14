import React from "react";

const OurWorksGrid = () => {
  const cards = [
    {
      image: "/images/farmServices/grid/img1.png",
      title: "Coconut Estate",
      subtitle: "Karur",
      infoTitle: "Passive Income Orchard Built for Long-Term Yield",
      points: [
        " 40 Acres | 2,500 Hybrid Trees | Planted: 2011",
        "Full farm development: fencing, irrigation, zoning",
        "High-density layout designed for long-term stability",
      ],
    },
    {
      image: "/images/farmServices/grid/img2.png",
      title: "Blueberry Farm",
      subtitle: "Ooty",
      infoTitle: "High-Altitude Farming for Premium Berry Markets",
      points: [
        " 5 Acres | Cold-climate blueberries",
        "Smart irrigation, soil enhancement & market linkage",
      ],
    },

    {
      image: "/images/farmServices/grid/img3.png",
      title: "Mahogany Timber Estate",
      subtitle: "Karur",
      infoTitle: "Agroforestry for Wealth Creation",
      points: [
        "50 Acres | Kaya Mahogany | 12,500+ Trees",
        "Engineered 10-year harvest cycle | Timber wealth model",
      ],
    },

    {
      image: "/images/farmServices/grid/img4.png",
      title: "Gloriosa Superba Farm",
      subtitle: "Dindigul",
      infoTitle: "Medicinal Crop Expertise with 25+ Years of Practice",
      points: [
        " 10 Acres |Gloriosa Plantation | 5000+ plants",
        "Full farm development: fencing, irrigation, zoning",
      ],
    },
    {
      image: "/images/farmServices/grid/img5.png",
      title: "Teak Plantation",
      subtitle: "Oddanchatram",
      infoTitle: "Timber Asset with Sandalwood Like Quality",
      points: [
        "20 Acres | Premium teak trees",
        "Sustainable forestry with long-term returns",
      ],
    },
    {
      image: "/images/farmServices/grid/img6.png",
      title: "Amla Value Farm",
      subtitle: "Karur",
      infoTitle: "Compact Orchard with Processing Potential",
      points: [
        "5 Acres | 600 Trees",
        "Suited for juice, powder, candy and natural wellness",
      ],
    },
    {
      image: "/images/farmServices/grid/img7.png",
      title: "Goat Farming",
      subtitle: "Karur",
      infoTitle: "High-Raised Native Goat Unit",
      points: [
        "10,000 sq. ft Shed | 750 Sembarai Aadu Goats",
        " Semi-intensive system | Native breed productivity",
      ],
    },
    {
      image: "/images/farmServices/grid/img8.png",
      title: "Arecanut Farm",
      subtitle: "Sathyamangalam",
      infoTitle: "Integrated Drying + Post-Harvest Estate",
      points: [
        "10 Acres | Solar Dryer + Processing Unit",
        "Low-labor, sustainable arecanut farming model",
      ],
    },
    ,
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4 sm:p-6 lg:p-10">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="relative rounded-lg overflow-hidden shadow-lg group min-h-[500px] flex"
        >
          {/* Background image */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="relative z-10 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4 sm:p-6 w-full h-full">
            <div className="w-full max-w-xs">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {card.title}
              </h2>
              <h3 className="text-sm font-light mb-3 sm:text-base">
                {card.subtitle}
              </h3>

              <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">{card.infoTitle}</h4>
                <ul className="text-left text-xs sm:text-sm space-y-1">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurWorksGrid;
