import React from "react";
import Footer from "../newComponents/Footer";

const Services = () => {
  return (
    <>
      <main>
        {/* Page Header */}
        <section className="page-header-bg text-white bg-[url(/images/bulk-leasing/bl1.jpg)] bg-cover bg-center ">
          <div className="container mx-auto px-6 py-24 text-center bg-black/50">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Our Process: A Journey to Profitability
            </h1>
            <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
              We provide a comprehensive, end-to-end service, guiding your
              project from initial concept to a thriving, revenue-generating
              agricultural asset.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <span className="text-green-600 font-bold">STEP 01</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                  Consultation & Strategic Planning
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Every successful venture begins with a data-driven strategy.
                  We analyze your land's potential, assess market viability, and
                  create a clear, actionable roadmap for profitability.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Agri-Consultancy & Feasibility Analysis
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    High-Precision Digital Land Surveying
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Groundwater Divining & Water Sourcing
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="images/new_services/consult.png"
                  alt="Strategic Planning"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="md:order-2">
                <span className="text-green-600 font-bold">STEP 02</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                  Foundation & Infrastructure Development
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  We build the essential backbone of your farm. From
                  meticulously shaping the land to installing state-of-the-art
                  infrastructure, our team ensures your project is engineered
                  for optimal efficiency and high performance.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Heavy Earthworks & Precision Land Leveling
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Advanced Farm Infrastructure & Mechanisation
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Protected Cultivation & Polyhouse Construction
                  </p>
                </div>
              </div>
              <div className="md:order-1">
                <img
                  src="images/new_services/cultivation.png"
                  alt="Infrastructure Development"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-green-600 font-bold">STEP 03</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                  Cultivation & Asset Management
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Our team handles the complete project execution and ongoing
                  day-to-day management, transforming your land into a
                  high-performing, revenue-generating asset that thrives for
                  years to come.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Turnkey Farm Development & Execution
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Strategic Farm & Operations Management
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    Organic Farming & Skill Development Training
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="images/new_services/found.png"
                  alt="Asset Management"
                  className="rounded-lg shadow-xl w-full h-128"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Specialized & Value-Added Services
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Beyond our core process, we offer a suite of specialized
                services to enhance the value, functionality, and brand identity
                of your agricultural asset.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Turnkey Project Development",
                  desc: "We offer complete end-to-end project management, from initial concept and land acquisition to a fully operational, revenue-generating farm.",
                },
                {
                  title: "Soil & Water Conservation",
                  desc: "We implement advanced conservation strategies to enhance soil health, improve water retention, and ensure the long-term sustainability of your land.",
                },
                {
                  title: "Landscaping & Farm Beautification",
                  desc: "We design and execute ecologically functional and visually stunning landscapes, incorporating artistic elements like sculptures to elevate your farm's aesthetic appeal.",
                },
                {
                  title: "Protected Cultivation",
                  desc: "We specialize in the design and construction of advanced protected cultivation structures, including polyhouses, shade nets, and greenhouses, for high-value, climate-controlled farming.",
                },
                {
                  title: "Advanced Farm Mechanisation",
                  desc: "We advise on and implement the most effective farm mechanisation strategies, from machinery selection to operational training, to maximize efficiency and reduce labor costs.",
                },
                {
                  title: "Nursery & Sapling Support",
                  desc: "We provide high-quality, disease-free saplings and establish on-site nurseries to ensure your plantation has a healthy, robust, and productive start.",
                },
                {
                  title: "Farm House & Resort Construction",
                  desc: "Our team designs and constructs premium farmhouses and agri-tourism resorts that blend modern comforts with natural aesthetics, creating perfect rural sanctuaries.",
                },
                {
                  title: "Engineered Livestock Housing",
                  desc: "We design and construct premium, scientifically designed sheds and housing that promote the health, welfare, and productivity of your livestock assets.",
                },
                {
                  title: "Natural Water Ponds",
                  desc: "We specialize in engineering sustainable natural ponds for rainwater harvesting, irrigation, and enhancing the farm's biodiversity and aesthetic appeal.",
                },
                {
                  title: "Value-Added Product Development",
                  desc: "We guide you in transforming your raw produce into high-margin, market-ready products, from cold-pressed oils to packaged goods, complete with branding support.",
                },
                {
                  title: "Corporate Social Responsibility (CSR)",
                  desc: "We partner with corporations to design and execute impactful CSR initiatives, such as large-scale tree plantation drives and community farming projects, creating shared value.",
                },
                {
                  title: "Tree Relocation & Transplanting",
                  desc: "Our experts utilize specialized techniques to safely relocate and preserve mature trees, maintaining the ecological balance and heritage of your land.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600"
                >
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
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

export default Services;
