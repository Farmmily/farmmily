import React from "react";
import { FaLeaf, FaHandsHelping, FaSeedling, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/FooterHome";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <img
          src="/images/ownAFarmBg.jpg"
          alt="Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl font-bold text-center px-4">
            Cultivating Roots, Growing Futures
          </h1>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
          Empowering the Future of Farming. Together.
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
          Farmmily is a next-generation agricultural development company
          dedicated to bridging the gap between people and farming. We blend
          traditional agricultural wisdom with modern innovation to build
          sustainable, profitable, and scalable farm ecosystems.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Our mission is to redefine farming as a respected, transparent, and
          investible industry—where farmers thrive, and everyone has the
          opportunity to be part of the food system.
        </p>
      </section>

      {/* Mission + Vision Cards */}
      <section className="bg-[#f9f9f9] py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-700">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To build a future where farming is a dignified, profitable, and
              collaborative pursuit—accessible to all, respected by society, and
              powered by innovation.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-700">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              Our Mission
            </h3>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold">•</span>
                <span>
                  Empower farmers with knowledge, infrastructure, and market
                  access.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold">•</span>
                <span>
                  Enable individuals to participate in farming through curated
                  leasing and development models.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold">•</span>
                <span>
                  Build trust, traceability, and profitability across the agri
                  value chain.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Callout */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h4 className="text-xl font-semibold text-green-800 mb-2">
            Let’s Cultivate Something Bigger
          </h4>
          <p className="text-gray-700 mb-1">
            Whether you’re a farmer, partner, or individual looking to own a
            piece of agriculture — Farmmily welcomes you to be part of this
            transformation.
          </p>
          <p className="text-green-800 font-semibold">
            Grow with us. Invest in nature. Reimagine farming.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#d5e5cc] py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What We Believe In
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: <FaLeaf />,
              title: "Sustainability",
              desc: "Every step is rooted in eco-conscious practices.",
            },
            {
              icon: <FaHandsHelping />,
              title: "Transparency",
              desc: "We share how your food grows & who grows it.",
            },
            {
              icon: <FaSeedling />,
              title: "Authenticity",
              desc: "Real farmers, real farms, and real impact.",
            },
            {
              icon: <FaUsers />,
              title: "Togetherness",
              desc: "We grow stronger when we grow together.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-700 text-3xl mb-3 mx-auto">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-[#111]">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Movement */}
      <section className="bg-[#f7f7f7] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">Ready to Grow With Us?</h3>
            <p className="text-gray-700 mb-6">
              Whether you’re looking to own a tree, host a farm stay, or become
              a full-fledged farmer — Farmmily welcomes you with open fields.
            </p>
            <Link
              to="/own-a-farm"
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded transition"
            >
              Own Your Farm
            </Link>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/images/faqImg.png"
              alt="Farm Connect"
              className="w-4/5 h-auto mx-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
