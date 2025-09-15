import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../newComponents/Footer";

const statsData = [
  { label: "Successful Projects", value: 100, suffix: "+", count: 0 },
  { label: "Acres Transformed", value: 750, suffix: "+", count: 1, start: 730 },
  {
    label: "Trees Planted",
    value: 100000,
    suffix: "+",
    count: 1,
    start: 99910,
  },
  { label: "Average Revenue Boost", value: 5, suffix: "X", count: 0 },
];

// Counter component
const Counter = ({ target, suffix, start1 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = start1;
    const end = target;
    if (start === end) return;

    let duration = 2000;
    let stepTime = Math.abs(Math.floor(duration / end));
    let timer = setInterval(() => {
      start += 2;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <p className="text-5xl font-extrabold text-green-600">
      {count.toLocaleString()}
      {suffix}
    </p>
  );
};

const Home = () => {
  return (
    <>
      <main className="font-sans">
        {/* Hero Section */}
        <section className="hero-bg relative text-white bg-[url('/images/bg-image.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto px-6 py-32 md:py-48 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
              Engineering Your Agricultural Legacy
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto animate-slide-up">
              We are architects of agricultural transformation, converting
              underutilized land into profitable, sustainable assets.
            </p>
            <Link
              to="/about"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-md hover:bg-green-700 hover:scale-105 transition-transform duration-300"
            >
              Unlock Your Land&apos;s Potential
            </Link>
          </div>
        </section>
        {/* Impact Stats */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A Legacy of Positive Impact
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center max-w-6xl mx-auto">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                >
                  {stat.count ? (
                    <Counter
                      target={stat.value}
                      suffix={stat.suffix}
                      start1={stat?.start}
                    />
                  ) : (
                    <p className="text-5xl font-extrabold text-green-600">
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </p>
                  )}
                  <p className="text-xl font-semibold text-gray-700 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Mandate */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Core Mandate
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Farmmily is a premier agricultural asset management firm. Our
                  core mandate is to unlock the immense potential of
                  underutilized land, engineering it into high-performing,
                  sustainable agricultural portfolios. We synergize deep-rooted
                  agronomic wisdom with cutting-edge technology to deliver
                  turnkey ventures that generate significant, long-term value.
                </p>
                <Link
                  to="/about"
                  className="text-green-600 font-semibold hover:underline text-lg"
                >
                  Learn More About Us →
                </Link>
              </div>
              <div>
                <img
                  src="/images/home_new/mandate.png"
                  alt="Our Process"
                  className="rounded-lg shadow-xl w-full md:h-128 object-fit"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our End-to-End Development Spectrum
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                We provide a comprehensive, turnkey service spectrum that covers
                the entire lifecycle of your agricultural asset, ensuring
                excellence at every stage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                "Strategic Site Analysis",
                "Financial Modeling",
                "Land & Compliance",
                "Infrastructure Engineering",
                "Agronomic Implementation",
                "Asset Optimization",
                "Market Linkage",
                "Operations & Management",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600 hover:shadow-xl hover:translate-y-[-5px] transition duration-300"
                >
                  <p className="text-2xl font-bold text-green-600 mb-2">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link
                to="/services"
                className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 hover:scale-105 transition duration-300"
              >
                Explore Our Services in Detail
              </Link>
            </div>
          </div>
        </section>
        {/* Project Spotlight */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Project Spotlight: The 150-Acre Timber Transformation
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  We specialize in converting large-scale, underperforming land
                  parcels into high-value, sustainable assets. For a recent
                  150-acre project in the Cauvery Delta Region, we engineered a
                  complete turnaround from fallow land to a thriving timber
                  plantation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">➔</span>
                    <div>
                      <span className="font-semibold">Asset:</span> 150-Acre
                      plot with inconsistent soil quality.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">➔</span>
                    <div>
                      <span className="font-semibold">Solution:</span> A turnkey
                      development plan featuring
                      <strong>
                        64,000 Tissue Culture Teak and Mahogany trees
                      </strong>
                      , a high-density planting model, and an integrated drip
                      fertigation system.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">➔</span>
                    <div>
                      <span className="font-semibold">Outcome:</span> A
                      projected high-ROI timber asset with significant
                      <strong>carbon sequestration benefits</strong>, creating a
                      sustainable legacy for generations.
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    to="/insights"
                    className="text-green-600 font-semibold hover:underline text-lg"
                  >
                    View More Case Studies →
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="/images/home_new/timberwood.png"
                  alt="Mahogany Plantation"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Sustainability */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Commitment to a Sustainable Future
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Profitability and sustainability are not mutually exclusive;
                  they are intertwined. We engineer every project to enhance
                  biodiversity, conserve water, and contribute to a
                  carbon-neutral future. Our commitment ensures our
                  clients&apos; financial success is built upon a foundation of
                  ecological stewardship, creating assets that are valuable for
                  generations to come.
                </p>
              </div>
              <div className="md:order-1">
                <img
                  src="images/home_new/sustain.png"
                  alt="Sustainability"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Ventures */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Ventures: Farmmily Farms & Foods
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  We are building a transparent food ecosystem. Our venture,
                  Farmmily Farms & Foods, bridges the gap between conscientious
                  consumers and dedicated farmers. We specialize in value-added
                  products and premium corporate gifting solutions, bringing the
                  authentic taste of nature&apos;s best from our managed farms
                  directly to the market.
                </p>
              </div>
              <div>
                <img
                  src="images/home_new/foods.png"
                  alt="Farmmily Foods"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Bring Your Ideas to the Table
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              We believe collaboration is the most fertile ground for
              innovation. If you have a groundbreaking project or a bold idea,
              we invite you to grow with us.
            </p>
            <div className="mt-8">
              <Link
                to="/partner"
                className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center bg-green-600 text-white p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Land?
            </h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Let&apos;s discuss how our expertise can translate your vision
              into a profitable agricultural reality. Contact us today for a
              complimentary consultation.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform duration-300 cta-button"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
