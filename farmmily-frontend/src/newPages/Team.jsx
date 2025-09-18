import React from "react";
import Footer from "../newComponents/Footer";

const Team = () => {
  const leaders = [
    {
      name: "A. Vijayakumar",
      role: "Director",
      image: "https://placehold.co/200x200/a3e635/ffffff?text=Director",
      description: `A. Vijayakumar is the foundational pillar of technical and
      strategic expertise at Farmmily. His distinguished 40-year career,
      culminating as a retired Superintendent Engineer from the Agricultural
      Engineering Department, Tamil Nadu, provides an unparalleled depth of
      field-tested knowledge. He is the guiding force behind the company's
      operational excellence, with a career marked by the successful completion
      of over 100 projects, including the field-level execution of major
      government initiatives. This practical wisdom is the bedrock of Farmmily's
      on-the-ground success. He possesses a profound depth of knowledge in
      agricultural farm mechanisation, innovative machinery development, and
      excels at deploying his problem-solving skills to overcome complex
      technical challenges. His strategic vision and profound field presence are
      indispensable to the company's success.`,
    },
    {
      name: "Sibi Selvan C",
      role: "Director",
      image: "https://placehold.co/200x200/a3e635/ffffff?text=Director",
      description: `Sibi Selvan C is the entrepreneurial engine and Director of
      Farmmily, leading the company's strategic business development. His
      professional focus is centered on a relentless drive for exploring diverse
      business opportunities and pioneering innovative agricultural models. This
      entrepreneurial mindset ignited at age 15 with his first venture selling
      tender coconuts, a foundation later built upon with a Mechanical
      Engineering degree from PSG College of Technology. He founded Farmmily at
      22, driven by a vision to architect high-yield, sustainable agricultural
      portfolios from underutilized land assets.`,
    },
  ];

  return (
    <>
      <main className="bg-gray-50 min-h-screen py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Leadership
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet the visionaries driving Farmmily’s mission to revolutionize
            sustainable farming and agricultural innovation.
          </p>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className="text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-40 h-40 rounded-full mx-auto mb-6 shadow-md object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-green-600 font-medium mb-4">{leader.role}</p>
              </div>
              <p className="text-gray-700 text-justify leading-relaxed">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Team;
