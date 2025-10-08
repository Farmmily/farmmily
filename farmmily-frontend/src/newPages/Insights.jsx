import React from "react";
import { motion } from "framer-motion";
import Footer from "../newComponents/Footer";

const caseStudies = [
  {
    title: "High-Value Timber Plantation",
    subtitle:
      "From Fallow to Fortune: A 150-Acre Mahogany Plantation in the Cauvery Delta Region",
    clientObjective:
      "Convert a large, underperforming agricultural landholding into a long-term, high-value asset with minimal annual maintenance.",
    challenge:
      "The 150-acre plot had inconsistent soil quality and was not suitable for traditional, water-intensive crops.",
    solution: [
      "Implemented soil enrichment using organic matter.",
      "Designed a high-density Mahogany plantation with scientific spacing.",
      "Installed an integrated drip fertigation system for precision watering.",
    ],
    outcomes: [
      "Established a thriving 150-acre Mahogany plantation.",
      "Projected ROI within a 12–15 year harvest cycle.",
      "Acts as a major carbon sink with carbon credit potential.",
    ],
    image: "/images/insights/timber.png",
  },
  {
    title: "Medicinal Crop Plantation",
    subtitle:
      "Cultivating Wellness: A 15-Acre Gloriosa Superba Plantation in Karur, Tamil Nadu",
    clientObjective:
      "Enter the lucrative medicinal plant market with Gloriosa Superba.",
    challenge:
      "Highly sensitive to soil conditions and prone to tuber rot — risk of total crop loss.",
    solution: [
      "Implemented raised-bed farming for better drainage.",
      "Used organic fungicides to prevent tuber rot.",
      "Secured a buy-back deal with a major pharmaceutical company.",
    ],
    outcomes: [
      "Achieved a high yield meeting pharma-grade standards.",
      "Delivered strong profit margins for the client.",
      "Proved expertise in high-risk, high-reward farming.",
    ],
    image: "/images/insights/medicine.png",
  },
  {
    title: "Sustainable Fruit Farming",
    subtitle: "The Mango Orchard Revival: Krishnagiri, Tamil Nadu",
    clientObjective:
      "Rejuvenate an aging mango orchard and increase yield & quality.",
    challenge:
      "Declining productivity, outdated irrigation, and poor soil health.",
    solution: [
      "Installed sub-surface drip irrigation for 60% water savings.",
      "Introduced organic fertilizers and pest control.",
    ],
    outcomes: [
      "Yield increased by 40% within two harvests.",
      "Improved fruit quality to meet export standards.",
    ],
    image: "/images/insights/sustain.png",
  },
  {
    title: "Carbon Credit Farming",
    subtitle:
      "The Green Asset: A 100-Acre Afforestation Project in Anantapur, Andhra Pradesh",
    clientObjective:
      "Convert arid land into a sustainable, income-generating project.",
    challenge: "Low rainfall and poor soil prevented traditional agriculture.",
    solution: [
      "Planted native, drought-resistant tree species.",
      "Registered project for international carbon credits.",
    ],
    outcomes: [
      "Transformed 100 acres into a thriving green zone.",
      "Generated passive income through carbon credits.",
    ],
    image: "/images/insights/carbon.png",
  },
  {
    title: "Integrated Farming Systems",
    subtitle:
      "Synergy in the Soil: A Livestock and Horticulture Farm in Mysuru, Karnataka",
    clientObjective:
      "Develop a diversified, self-sustaining farm resilient to market fluctuations.",
    challenge: "Single-crop model was too risky and resource-inefficient.",
    solution: [
      "Introduced Tellicherry goats with biogas conversion.",
      "Used biogas slurry as fertilizer for papaya plantation.",
    ],
    outcomes: [
      "Created three income streams: livestock, fruit, and energy.",
      "Reduced costs via zero-waste farming.",
    ],
    image: "/images/insights/int.png",
  },
  {
    title: "Agri-Tourism & Resort Development",
    subtitle:
      "Beyond the Harvest: A Sustainable Agri-Tourism Resort in Coorg, Karnataka",
    clientObjective:
      "Diversify coffee & spice plantation income through hospitality.",
    challenge:
      "Needed eco-friendly integration without disrupting farm operations.",
    solution: [
      "Constructed eco-cottages using sustainable materials.",
      "Created authentic farm-to-table guest experiences.",
    ],
    outcomes: [
      "Generated a new high-occupancy revenue stream.",
      "Blended sustainability with luxury tourism.",
    ],
    image: "/images/insights/agrotourism.png",
  },
];

const Insights = () => {
  return (
    <>
      <main>
        {/* Header */}
        <section className="bg-[url('/images/insights/hero.png')] bg-cover bg-center text-white relative">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto px-6 py-24 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Insights: Transforming Land into Legacy
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              Real-world success stories that showcase our expertise in creating
              profitable, sustainable, and future-ready agricultural assets.
            </motion.p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 space-y-24">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Image */}
                <motion.div
                  className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </motion.div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-green-700 font-semibold uppercase tracking-wide">
                    {study.title}
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4 leading-snug">
                    {study.subtitle}
                  </h2>
                  <p className="text-gray-600 mb-3">
                    <strong>Client Objective:</strong> {study.clientObjective}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>The Challenge:</strong> {study.challenge}
                  </p>
                  <p className="text-gray-700 font-semibold mb-2">
                    Farmmily’s Solution:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                    {study.solution.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                  <p className="text-gray-700 font-semibold mb-2">
                    Key Outcomes:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {study.outcomes.map((o, idx) => (
                      <li key={idx}>{o}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Insights;
