import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Tree Owner",
    rating: 5,
    message:
      "Farmmily made it so easy to own a tree remotely. I get updates regularly and feel connected to nature.",
    img: "/images/testimonialImages/testImg1.png",
  },
  {
    name: "Meera Reddy",
    role: "Farmer",
    rating: 4,
    message:
      "I was able to lease my land easily and get great support. Farmmily is changing lives!",
    img: "/images/testimonialImages/testImg2.png",
  },
  {
    name: "Rohan Das",
    role: "Tree Owner",
    rating: 5,
    message:
      "Their agro-tourism and transparency made me a loyal supporter. It’s more than just buying a product.",
    img: "/images/testimonialImages/testImg3.png",
  },
  {
    name: "Kavya Iyer",
    role: "Farmer",
    rating: 4,
    message:
      "It feels great to work with a platform that really cares about sustainable farming.",
    img: "/images/testimonialImages/testImg4.png",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-cover bg-no-repeat py-16"
      style={{
        backgroundImage: "url('/images/testimonialImages/testimonialBg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center text-black">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Our Testimonials
        </h2>
        <h2 className="text-green-600 text-4xl sm:text-3xl mb-12 max-w-xl mx-auto font-sans font-normal trackign-wide">
          Stories from Our Farmmily Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 rounded-lg p-6 shadow-md flex flex-col space-y-4"
            >
              <div className="flex items-center gap-4">
                {/* <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                /> */}
                <div className="text-left">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-xs text-gray-600">{t.role}</p>
                  <div className="flex">
                    {[...Array(t.rating)].map((_, idx) => (
                      <span key={idx} className="text-yellow-500 text-sm">
                        ★
                      </span>
                    ))}
                    {[...Array(5 - t.rating)].map((_, idx) => (
                      <span key={idx} className="text-gray-300 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-left leading-relaxed">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
