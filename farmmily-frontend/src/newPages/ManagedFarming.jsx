import React from "react";
import { Link } from "react-router-dom";

const ManagedFarming = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="page-header-bg text-white bg-[url('/images/home_new/managedFarming.png')] bg-cover bg-center">
        <div className="container mx-auto px-6 py-24 text-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Experience Farming, Without Buying the Farm.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-3xl mx-auto">
            Lease a plot, customize your crops, and let our experts manage your
            agricultural asset. It's hassle-free farm ownership, reimagined.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              A Simple Path to Farm Ownership
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Our process is designed for clarity and simplicity, allowing you
              to become a farm owner in four easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: "1. Choose Your Plot",
                desc: "Select your ideal plot from our portfolio of prime, managed farmlands, each with a detailed analysis of its potential.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                ),
              },
              {
                title: "2. Customize Your Crops",
                desc: "This is your farm. Choose from a wide range of high-value crops based on seasonality, market trends, and your personal goals.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                ),
              },
              {
                title: "3. We Manage Everything",
                desc: "Our expert team handles 100% of the operations: planting, irrigation, pest control, harvesting, and market linkage.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 0012 21.75a12 12 0 008.618-5.754A11.955 11.955 0 0112 15.944V2.944z"
                  />
                ),
              },
              {
                title: "4. Reap the Rewards",
                desc: "Enjoy the financial returns from your harvest and the pride of ownership, all with complete transparency and zero hassle.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                ),
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center p-6 step-card">
                <div className="step-icon bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {step.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className=" bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Farming Reimagined: The Key Benefits
            </h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "No Land Purchase Required",
                desc: "Experience all the benefits of farm ownership without the high capital investment and legal complexities of buying land.",
              },
              {
                title: "Low Initial Investment",
                desc: "Start your agricultural journey with a manageable lease, making it an accessible and tangible asset for your portfolio.",
              },
              {
                title: "Complete Expert Management",
                desc: "Our team of agronomists and engineers handles every aspect of the operation, from seasonal crop selection to market linkage.",
              },
              {
                title: "Fully Customizable Venture",
                desc: "Your farm, your choice. We work with you to select the crops that align with your personal interests and financial goals.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-green-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/proudFarmer.png"
                alt="Hassle-free farming"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who is This For?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                This innovative model of agricultural ownership is designed for
                a diverse range of individuals seeking a tangible connection to
                the land.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "The Aspiring Farmer:",
                    desc: "Become a proud farm owner and experience the joys of agriculture without the daily operational challenges.",
                  },
                  {
                    title: "The Savvy Investor:",
                    desc: "Diversify your portfolio with a tangible, land-based asset and generate a stable, alternative income stream from agriculture.",
                  },
                  {
                    title: "The Urban Professional:",
                    desc: "Own a piece of the countryside and connect with nature on your own terms, without leaving your city life behind.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="text-gray-800">{item.title}</strong>{" "}
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Farming Journey Today
          </h2>
          <p className="text-lg text-green-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can customize a managed farm to meet your
            personal and financial goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform duration-300"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ManagedFarming;
