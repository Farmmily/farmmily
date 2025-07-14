import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../DentedCard.css";

const NavigationCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Alphonso Mango Tree",
      description:
        "Lease a tree and enjoy your own organic mangoes, harvested and delivered to your doorstep.",
      image: "/images/home/mango.jpg",
      route: "/own-a-farm/alphonso-mango",
    },
    {
      id: 2,
      title: "Coconut Tree",
      description:
        "Own a tree and get coconuts or pure cold-pressed oil, then its delivered directly from your tree.",
      image: "/images/home/coconut.jpg",
      route: "/own-a-farm/coconut",
    },
    {
      id: 3,
      title: "Mini Farm Plot",
      description:
        "Grow seasonal crops on your personal farm patch managed by expert farmers on your behalf.",
      image: "/images/home/farm.jpg",
      route: "/mini-plot",
    },
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="bg-[#d5e5cc] p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-20">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleNavigation(card.route)}
            className="relative w-full sm:w-72 max-w-xs bg-white rounded-[2rem] shadow-md p-6 pt-8 text-center dented-card transition-transform hover:scale-105 focus:outline-none"
          >
            {/* Arrow Button */}
            <div className="absolute top-2 right-2 w-10 h-10 rounded-full bg-green-800 hover:bg-green-900 text-white flex items-center justify-center shadow-lg z-10 pointer-events-none">
              <ArrowUpRight size={16} />
            </div>

            {/* Image */}
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-600 mb-5">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed lg:pb-10">
              {card.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationCards;
