import React from "react";

const testimonials = [
  {
    name: "Ravi Kumar",
    location: "Chennai",
    year: "2024",
    message: "Absolutely loved the freshness and transparency from Farmmily!",
    image: "/images/testimonialImages/testImg1.png",
  },
  {
    name: "Anjali Mehta",
    location: "Mumbai",
    year: "2023",
    message: "It’s amazing to own a tree and get real produce delivered!",
    image: "/images/testimonialImages/testImg2.png",
  },
  {
    name: "Vikram Singh",
    location: "Delhi",
    year: "2024",
    message: "Farmmily has changed the way I look at food sourcing.",
    image: "/images/testimonialImages/testImg3.png",
  },
  {
    name: "Preeti Sharma",
    location: "Bengaluru",
    year: "2022",
    message: "Leasing a tree was the best decision for my family!",
    image: "/images/testimonialImages/testImg4.png",
  },
];

const TreeTestimonials = ({ treeName }) => {
  return (
    <div className="py-16 bg-white ">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Voices of our <span className="text-green-700">{treeName}</span> family
      </h2>

      <div className="overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-6 px-6 w-max">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-[300px] min-w-[300px] bg-gray-100 p-4 rounded-md shadow-md flex-shrink-0"
            >
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
              <p className="text-sm mb-4">{t.message}</p>
              <p className="text-xs text-gray-400">Leased in {t.year}</p>
            </div>
          ))}

          {/* Optional looping for infinite feel */}
          {testimonials.map((t, index) => (
            <div
              key={"loop-" + index}
              className="w-[300px] min-w-[300px] bg-gray-100 p-4 rounded-md shadow-md flex-shrink-0"
            >
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
              <p className="text-sm mb-4">{t.message}</p>
              <p className="text-xs text-gray-400">Leased in {t.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreeTestimonials;
