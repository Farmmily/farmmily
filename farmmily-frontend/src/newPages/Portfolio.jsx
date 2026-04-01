import React, { useState } from "react";
import Footer from "../newComponents/Footer";

const Portfolio = () => {
  const portfolioData = [
    {
      title: "High-Value Timber Plantations",
      category: "LEGACY & ASSET MANAGEMENT",
      description:
        "We specialize in the end-to-end development of large-scale timber plantations, focusing on high-ROI species like Tissue Culture Teak and Mahogany. Our scientific approach to soil management and high-density planting transforms land into a valuable, appreciating asset for future generations.",
      mainImage:
        "/images/portfolio/timber.jpg",
      gallery: [
        "https://placehold.co/400x300/854d0e/ffffff?text=Then:+Saplings+(2015)",
        "https://placehold.co/400x300/ca8a04/ffffff?text=Now:+Mature+Forest+(2025)",
        "https://placehold.co/400x300/a16207/ffffff?text=Drip+Irrigation",
      ],
    },
    {
      title: "Medicinal Crop Cultivation",
      category: "SPECIALIZED FARMING",
      description:
        "Our expertise extends to the profitable cultivation of high-demand medicinal crops. We manage the entire process, from creating optimal soil conditions to establishing market linkages for niche products like Gloriosa Superba, ensuring a lucrative venture into the pharmaceutical supply chain.",
      mainImage:
        "/images/portfolio/med.jpg",
      gallery: [
        "https://placehold.co/400x300/db2777/ffffff?text=Gloriosa+Superba+Flower",
        "https://placehold.co/400x300/e11d48/ffffff?text=Cultivation+Field",
        "https://placehold.co/400x300/9f1239/ffffff?text=Harvesting+Process",
      ],
    },
    {
      title: "Training & Skill Development",
      category: "EDUCATION & EMPOWERMENT",
      description:
        "We are committed to nurturing the next generation of agricultural professionals. We conduct specialized training programs for students and farmers on critical topics like organic farming, modern tree climbing techniques, and sustainable water management, empowering communities with practical, field-ready skills.",
      mainImage:
        "/images/portfolio/training.jpg",
      gallery: [
        "https://placehold.co/400x300/047857/ffffff?text=Classroom+Training",
        "https://placehold.co/400x300/065f46/ffffff?text=Field+Demonstration",
        "https://placehold.co/400x300/10b981/ffffff?text=Student+Interaction",
      ],
    },
    {
      title: "Sustainable Fruit Farming",
      category: "HORTICULTURE",
      description:
        "We revitalize and establish modern fruit orchards with a focus on sustainability and yield maximization. By implementing precision irrigation and organic farming practices, we have successfully boosted yields by over 40% in projects like our Mango orchard revivals, ensuring higher quality produce.",
      mainImage:
        "/images/portfolio/fruit.jpg",
      gallery: [
        "https://placehold.co/400x300/fbbf24/ffffff?text=Before:+Old+Orchard",
        "https://placehold.co/400x300/facc15/ffffff?text=After:+Revitalized+Farm",
        "https://placehold.co/400x300/eab308/ffffff?text=Fruit+Harvest",
      ],
    },
    {
      title: "Farm Mechanisation",
      category: "MODERN CAPABILITIES",
      description:
        "We deploy a fleet of advanced and heavy earth-moving machinery to execute large-scale projects with precision and efficiency. From laser-guided land leveling to automated planting systems, our investment in technology ensures projects are completed on time and to the highest engineering standards.",
      mainImage:
        "/images/portfolio/farm_mech.jpg",
      gallery: [
        "https://placehold.co/400x300/1d4ed8/ffffff?text=Excavator+Work",
        "https://placehold.co/400x300/2563eb/ffffff?text=Drone+Seeding",
        "https://placehold.co/400x300/3b82f6/ffffff?text=Automated+Harvesting",
      ],
    },
    {
      title: "Innovations in Agri-Tech",
      category: "MODERN CAPABILITIES",
      description:
        "Our commitment to innovation drives us to integrate cutting-edge technology into every project. We utilize digital surveying for precise analysis, deploy IoT sensors for real-time monitoring, and use data analytics to create predictive models for crop yields.",
      mainImage:
        "/images/portfolio/tech.JPG",
      gallery: [
        "https://placehold.co/400x300/0e7490/ffffff?text=Data+Analytics+Dashboard",
        "https://placehold.co/400x300/06b6d4/ffffff?text=IoT+Soil+Sensor",
        "https://placehold.co/400x300/22d3ee/ffffff?text=Digital+Survey+Map",
      ],
    },
    {
      title: "Landscaping & Sculptural Design",
      category: "AESTHETIC & ECOLOGICAL DESIGN",
      description:
        "We believe farms should be both productive and beautiful. Our landscaping services create aesthetically superior environments, integrating bespoke elements like artistic sculptures and serene walkways to elevate the value and appeal of the property.",
      mainImage: "/images/portfolio/land.jpg",
      gallery: [
        "https://placehold.co/400x300/22c55e/ffffff?text=Artistic+Sculptures",
        "https://placehold.co/400x300/4ade80/ffffff?text=Manicured+Gardens",
        "https://placehold.co/400x300/15803d/ffffff?text=Natural+Pathways",
      ],
    },
    {
      title: "Water Management & Conservation",
      category: "SUSTAINABLE INFRASTRUCTURE",
      description:
        "Water is a critical asset. We specialize in the design and construction of natural irrigation ponds and check dams to harvest rainwater effectively. Our water conservation strategies ensure a sustainable and resilient water supply for every project.",
      mainImage:
        "/images/portfolio/water.jpg",
      gallery: [
        "https://placehold.co/400x300/0284c7/ffffff?text=Natural+Irrigation+Pond",
        "https://placehold.co/400x300/38bdf8/ffffff?text=Check+Dam+Construction",
        "https://placehold.co/400x300/7dd3fc/ffffff?text=Rainwater+Harvesting",
      ],
    },
    {
      title: "Mature Tree Transplantation",
      category: "ECOLOGICAL ENGINEERING",
      description:
        "Preserving mature trees is a cornerstone of our ecological commitment. We utilize advanced techniques and specialized machinery to safely relocate large trees, conserving biodiversity and the natural heritage of the land during development projects.",
      mainImage:
        "/images/portfolio/tree_trans.jpg",
      gallery: [
        "https://placehold.co/400x300/4d7c0f/ffffff?text=Large+Tree+Moving",
        "https://placehold.co/400x300/84cc16/ffffff?text=Specialized+Machinery",
        "https://placehold.co/400x300/a3e635/ffffff?text=Successfully+Relocated+Tree",
      ],
    },
    {
      title: "Farm House & Estate Construction",
      category: "CIVIL & CONSTRUCTION",
      description:
        "We provide complete construction solutions for agricultural estates. This includes building custom farmhouses that blend with the landscape and executing critical civil works like retaining walls and check dams, especially for projects in hilly terrain.",
      mainImage: "/images/portfolio/farm.jpg",
      gallery: [
        "https://placehold.co/400x300/64748b/ffffff?text=Custom+Farm+House",
        "https://placehold.co/400x300/cbd5e1/ffffff?text=Retaining+Wall+Construction",
        "https://placehold.co/400x300/e2e8f0/ffffff?text=Hillside+Estate+Work",
      ],
    },
    {
      title: "Custom Engineering & Fabrication",
      category: "MECHANICAL & INNOVATION",
      description:
        "Our in-house engineering capabilities allow us to create bespoke solutions for unique agricultural challenges. We design and fabricate custom machinery, structures, and tools, ensuring every project is equipped for optimal performance and efficiency.",
      mainImage: "/images/portfolio/custom.JPG",
      gallery: [
        "https://placehold.co/400x300/4c1d95/ffffff?text=Custom+Machinery",
        "https://placehold.co/400x300/6d28d9/ffffff?text=Welding+&+Fabrication",
        "https://placehold.co/400x300/7c3aed/ffffff?text=Bespoke+Structures",
      ],
    },
    {
      title: "Value Addition & Post-Harvest",
      category: "BUSINESS & MARKETING",
      description:
        "Maximizing profitability extends beyond the harvest. We establish post-harvest processing and value-addition units for products like cold-pressed oils and packaged goods. This strategy captures more of the value chain for our clients, creating premium, market-ready products.",
      mainImage:
        "/images/portfolio/value.JPG",
      gallery: [
        "https://placehold.co/400x300/b45309/ffffff?text=Processing+Unit",
        "https://placehold.co/400x300/f59e0b/ffffff?text=Packaged+Products",
        "https://placehold.co/400x300/fbbf24/ffffff?text=Farm+Branding",
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <main>
        {/* Header Section */}
        <section className="page-header-bg text-white bg-[url(/images/portfolio/cover.JPG)] bg-cover bg-center">
          <div className="container mx-auto px-6 py-24 text-center bg-black/50">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Our Project Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-3xl mx-auto">
              A showcase of our diverse capabilities, successful project
              deliveries, and commitment to excellence.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {portfolioData.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group transition-transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      onClick={() => setSelectedProject(project)}
                      className="w-full h-56 object-cover bg-top cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-green-600 font-semibold mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start p-5 border-b border-gray-200">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-green-700 mt-1">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-700 hover:text-gray-900 text-3xl leading-none"
                  aria-label="Close lightbox"
                >
                  &times;
                </button>
              </div>
              <div className="p-5">
                <img
                  src={selectedProject.mainImage}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed mb-4">
                  {selectedProject.description}
                </p>
                {selectedProject.gallery?.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProject.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedProject({ ...selectedProject, mainImage: img })}
                        className="group overflow-hidden rounded-lg border border-gray-200"
                      >
                        <img
                          src={img}
                          alt={`${selectedProject.title} gallery ${idx + 1}`}
                          className="w-full h-24 object-cover group-hover:opacity-80"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
