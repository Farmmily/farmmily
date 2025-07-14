import React from "react";

const galleryImages = [
  "/images/agrotourism/img1.png",
  "/images/agrotourism/img2.png",
  "/images/agrotourism/img3.png",
  "/images/agrotourism/img4.png",
  "/images/agrotourism/img5.png",
  "/images/agrotourism/img6.png",
  "/images/agrotourism/img7.png",
  "/images/agrotourism/img8.png",
];

const AgroGallery = () => {
  return (
    <section className="bg-white py-4 px-4 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
        Endless beauty, natural charm
      </h2>

      {/* Subheading */}
      <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
        Trade one busy holiday for something real—walk with farmers, laugh by a
        pond, breathe forest air. This is Farmmily Living. Simple, honest,
        unforgettable.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {galleryImages.map((src, idx) => (
          <div key={idx} className="shadow-md rounded-lg overflow-hidden">
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-[300px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Final Subheadings */}
      <div className="max-w-3xl mx-auto text-center text-gray-800 space-y-2">
        <p className="font-semibold text-lg">
          Live like our ancestors—rooted in land, community, and clean air.
        </p>
        <p>
          Meet village families, share their routines, milk cows, feed goats,
          visit the local sandai, and plant a tree of your own.
        </p>
      </div>
    </section>
  );
};

export default AgroGallery;
