import React from "react";
import Footer from "../newComponents/Footer";

const About = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="page-header-bg text-white bg-[url(/images/about_us.png)] bg-cover bg-center">
          <div className="container mx-auto px-6 py-24 text-center bg-black/50">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              About Farmmily Agro Infra Developers Pvt Ltd
            </h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            {/* Intro */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Engineering Prosperity from the Ground Up
              </h2>
              <p className="text-lg text-gray-600">
                Farmmily is a premier agricultural asset management firm founded
                to unlock the immense potential of India's land. We are
                architects of agricultural transformation, converting
                underutilized land into high-performing, sustainable portfolios.
                By synergizing deep-rooted agricultural wisdom with cutting-edge
                engineering, we deliver turnkey ventures that create significant
                value for our clients, our communities, and our nation.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To engineer profitable agricultural assets that actively
                  contribute to a carbon-neutral future through sustainable
                  practices and strategic carbon sequestration.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To redefine India's agricultural landscape, creating a future
                  where ecological stewardship and economic prosperity are one
                  and the same.
                </p>
              </div>
            </div>

            {/* Sustainability Commitment */}
            <div className="text-center mt-20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  A Commitment to a Greener India
                </h2>
                <p className="text-lg text-gray-600">
                  For us, sustainability is not an afterthought; it is a core
                  business principle. We are committed to pioneering
                  agricultural practices that restore and enrich the land for
                  future generations. Every project is engineered to enhance
                  biodiversity, conserve water, and contribute to a
                  carbon-neutral future, ensuring that our clients' success is
                  also a victory for the planet.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="text-center mb-12 mt-20">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Core Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Integrity",
                  desc: "Building partnerships on a foundation of absolute transparency and trust.",
                },
                {
                  title: "Innovation",
                  desc: "Leveraging agri-tech and data analytics to engineer future-ready, sustainable assets.",
                },
                {
                  title: "Sustainability",
                  desc: "Acting as custodians of the land, engineering projects that enhance ecological balance for future generations.",
                },
                {
                  title: "Excellence",
                  desc: "Upholding the highest standards of quality, from strategic planning to execution, to deliver agricultural legacies.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg text-center border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
