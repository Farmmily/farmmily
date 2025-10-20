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
          <div className="container mx-auto px-6 space-y-20">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-md rounded-xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-green-700 font-semibold uppercase tracking-wide">
                  {study.title}
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4 leading-snug">
                  {study.subtitle}
                </h2>

                <div className="text-gray-600 space-y-4">
                  <p>
                    <strong>Client Objective:</strong> {study.clientObjective}
                  </p>
                  <p>
                    <strong>The Challenge:</strong> {study.challenge}
                  </p>

                  <div>
                    <p className="text-gray-700 font-semibold mb-2">
                      Farmmily’s Solution:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      {study.solution.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold mt-4 mb-2">
                      Key Outcomes:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      {study.outcomes.map((o, idx) => (
                        <li key={idx}>{o}</li>
                      ))}
                    </ul>
                  </div>
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
