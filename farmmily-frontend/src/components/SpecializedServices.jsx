const SpecializedServices = () => {
  const services = [
    {
      image: "/images/farmServices/services/img1.png",
      title: "Tree Relocation & Uplifting",
      points: [
        "250+ mature trees successfully relocated",
        "80%+ survival rate",
        "Full-service root balling, secure transport, and aftercare",
        "Ideal for land reshaping, road expansion, or tree conservation",
      ],
    },
    {
      image: "/images/farmServices/services/img2.png",
      title: "Landscaped bunds and natural ponds",
      points: [
        "Agro-aesthetic design with bunds, pathways, and hedges",
        "Garden and food forest layout integration",
        "Natural waterbody planning (tanks, ponds, recharge systems)",
        "Adds beauty and functional design to your land",
      ],
    },
    {
      image: "/images/farmServices/services/img3.png",
      title: "Farmhouse Construction",
      points: [
        "Eco-friendly and modern construction: mud, prefab, RCC",
        "Utilities: solar power, water systems, sanitation, plumbing",
        "Landscape blending for private retreats or farm stays",
        "Tailored for agro-tourism, family retreats, or weekend use",
      ],
    },
    {
      image: "/images/farmServices/services/img4.png",
      title: "Farm Mechanisation & Infrastructure",
      points: [
        "Mini tractors, irrigation controllers, harvest tools",
        "Processing equipment & post-harvest infrastructure",
        "On-ground training for local workforce",
        "Smart automation to reduce dependency & improve yield",
      ],
    },
    {
      image: "/images/farmServices/services/img5.png",
      title: "Nursery & Seedling Services",
      points: [
        "Certified saplings: timber, fruit, and medicinal varieties",
        "Region-matched propagation & planting advice",
        "Pacing, timing & aftercare support",
        "Strengthens your farm from the roots",
      ],
    },
    {
      image: "/images/farmServices/services/img6.png",
      title: "Farm Branding & Identity Services",
      points: [
        "Naming, logo, packaging & label design",
        "Product storytelling & brand strategy",
        "Basic online presence setup (optional)",
        "Ideal for farm-to-brand ventures, agro-tourism & D2C",
      ],
    },
  ];

  return (
    <div className="p-6 lg:p-12">
      {/* Section Heading */}
      <h2 className="text-3xl lg:text-4xl font-semibold font-sans text-left mb-8 text-gray-700 pl-2">
        Specialized Services
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover p-4"
            />

            {/* Title */}
            <div className="pt-4 pb-8 px-6 flex-grow">
              <h3 className="text-xl font-semibold text-[#324f14] mb-3 text-center">
                {service.title}
              </h3>

              {/* Points Box */}
              <div className="bg-[#6da54d] text-white rounded-lg p-4">
                <ul className="space-y-1 text-sm text-left list-disc list-inside">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializedServices;
