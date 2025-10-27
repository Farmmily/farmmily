import React, { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";
import Footer from "../newComponents/Footer";

const teamMembers = [
  {
    id: "vijayakumar",
    name: "Vijayakumar Arumugam",
    role: "Director",
    din: "11253864",
    image: "/images/ppl/vijay.jpg",
    bio1: "Vijayakumar Arumugam directs Farmmmily's technical and field operations, translating strategic plans into successful on-ground execution. He brings nearly four decades of distinguished experience from the Agricultural Engineering Department, Government of Tamil Nadu, where he retired as a Superintendent Engineer. His extensive field knowledge is backed by an M.Tech in Farm Power Engineering and an MBA in Agri-Business, both from TNAU, Coimbatore.",
    bio2: "As the company’s chief field expert, his technical expertise is foundational to Farmmily's success. His background in mechanical engineering is pivotal to his work in large-scale farm mechanization, soil and water conservation, waste management solutions, and the development of innovative agricultural machinery. His proven ability to manage complex on-ground projects is the bedrock of the company's delivery excellence.",
    linkedin:
      "https://www.linkedin.com/in/vijayakumar-arumugam-b2028838b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjpPgWCk9S0CXBA6unlAY4Q%3D%3D",
  },
  {
    id: "sibi-selvan",
    name: "Sibi Selvan C",
    role: "Director",
    din: "11253863",
    image: "/images/ppl/sibi.jpg",
    bio1: "Sibi Selvan C leads Farmmily's corporate strategy, business development, and general administration. A Mechanical Engineer from PSG College of Technology, he is responsible for executing the company’s market expansion strategy—supporting growth through diverse channels and strategic market collaborations—while ensuring operational excellence across all ventures.",
    bio2: "His focus is on pioneering innovative, high-yield agricultural models, forging strategic partnerships, and managing key client relationships to convert land assets into profitable portfolios. His strategic foresight and business acumen are fundamental to the company's growth.",
    linkedin:
      "https://www.linkedin.com/in/sibi-selvan-c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqgDvRHxaS0SGosf2f3fJ4w%3D%3D",
  },
  {
    id: "jayaram-balasubramanian",
    name: "Jayaram Balasubramanian",
    role: "Principal Advisor - Horticulture & Agronomy",
    image: "/images/ppl/jay.jpg",
    bio1: "Jayaram Balasubramanian guides Farmmily's technical strategy for high-value crop cultivation, bringing over 40 years of international experience as a distinguished horticulturist. A Gold Medalist with an M.Sc. in Horticulture from TNAU, his expertise spans Floriculture, Pomology, and Spices, and he is a recognized specialist in medicinal and aromatic plant cultivation (including Stevia, Artemisia, Rosemary, Yacon, Gac and Monk Fruit). He served for 25 years in the Tamil Nadu Horticulture Department, holding key roles in the development of various state botanic gardens.",
    bio2: "As an international consultant for premier agencies like USAID and UNIDO, his expertise has been pivotal in large-scale horticultural projects across Africa, Asia, and the Middle East. He has also served as a key technical advisor to many of India's leading pharma and nutraceutical companies.",
    linkedin:
      "https://www.linkedin.com/in/bala1952?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDSJsGNWVRiGNYgatGEWzig%3D%3D",
  },
  {
    id: "krishnamohan-govindaswamy",
    name: "Dr. Krishnamohan Govindaswamy",
    role: "Principal Advisor - Crop Protection",
    image: "/images/ppl/krishna.jpg",
    bio1: "Dr. Krishnamohan Govindaswamy guides Farmmily's crop protection and plant health strategy. He is a seasoned professional with over four decades of deep experience in R&D, quality assurance, and field operations. A former scientist and Gold Medalist in Plant Pathology at Tamil Nadu Agricultural University (TNAU), he spent three decades in leadership roles at top-tier MNCs in the crop protection industry.",
    bio2: "His three decades of experience in the Crop Protection industry (MNCs) focused on the evaluation and market development activities for the promotion and marketing of Crop Protection products, including insecticides, fungicides, herbicides, nematicides, and biostimulants.",
    bio3: "His expertise also covers Indian regulatory affairs (facilitating new product registrations) and a specialized, high-level focus on biopesticides, having advised numerous national and international companies on establishing and marketing their bio-product portfolios in India.",
  },
];

const Team = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const showPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );

  const showNext = () =>
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalOpen) {
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const currentMember = teamMembers[currentIndex];

  return (
    <>
      <div className="bg-gray-50 font-inter text-gray-800">
        <div className="container mx-auto max-w-7xl p-6 md:p-12">
          {/* Header */}
          <header className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Meet Our Leadership
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We are a unified team of industry leaders, combining deep,
              cross-disciplinary expertise with a singular focus: delivering
              world-class results for our clients.
            </p>
          </header>

          {/* Directors */}
          <section className="mb-16 w-full">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-4 mb-8">
              Our Directors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {teamMembers.slice(0, 2).map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer p-10 flex flex-col items-center justify-center text-center w-full"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-contain shadow-sm mb-6"
                  />
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-base md:text-lg">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Advisors */}
          <section className="w-full">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-4 mb-8">
              Our Senior Leadership
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {teamMembers.slice(2).map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer p-10 flex flex-col items-center justify-center text-center w-full"
                  onClick={() => openModal(index + 2)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-44 h-44 md:w-56 md:h-56 rounded-full object-contain shadow-lg mb-6 bg-gray-100"
                  />
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-base md:text-lg">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 w-full max-w-4xl relative overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-4xl text-gray-400 hover:text-red-500 transition-colors"
              >
                &times;
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={showPrev}
                className="absolute left-3 md:left-[-3.5rem] top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-opacity-70 transition"
              >
                &#10094;
              </button>

              <button
                onClick={showNext}
                className="absolute right-3 md:right-[-3.5rem] top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-opacity-70 transition"
              >
                &#10095;
              </button>

              {/* Content */}
              <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-8 md:space-y-0">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <img
                    src={currentMember.image}
                    alt={currentMember.name}
                    className="w-44 h-44 md:w-56 md:h-56 rounded-full object-contain shadow-lg bg-gray-100 border-4 border-blue-100"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-blue-600/10 pointer-events-none"></div>
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {currentMember.name}
                  </h3>

                  {currentMember.din ? (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 justify-center md:justify-start mb-4">
                      <p className="text-lg md:text-xl font-semibold text-blue-600">
                        {currentMember.role}
                      </p>
                      <span className="text-gray-400 hidden sm:block">|</span>
                      <p className="text-sm text-gray-500 font-mono">
                        DIN: {currentMember.din}
                      </p>
                    </div>
                  ) : (
                    <p className="text-lg md:text-xl font-semibold text-blue-600 mb-4">
                      {currentMember.role}
                    </p>
                  )}

                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {currentMember.bio1}
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {currentMember.bio2}
                    </p>
                    {currentMember.bio3 && (
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {currentMember.bio3}
                      </p>
                    )}
                  </div>

                  {currentMember.linkedin && (
                    <a
                      href={currentMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Team;
