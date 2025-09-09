import React from "react";
import Footer from "../newComponents/Footer";

const PartnerWithUs = () => {
  return (
    <>
      (
      <main>
        {/* Hero Section */}
        <section className="page-header-bg text-white">
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Let's Cultivate the Future, Together.
            </h1>
            <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
              We believe collaboration is the most fertile ground for
              innovation. Whether you're a visionary entrepreneur or a leading
              supplier, we invite you to grow with us.
            </p>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Innovate With Us
                </h2>
                <p className="text-gray-600 text-lg">
                  The future of agriculture will be written by those who dare to
                  think differently. We are passionate about nurturing the next
                  generation of agri-tech pioneers and sustainable farming
                  visionaries. If you have an innovative project, a new business
                  model, or a bold idea that can reshape our industry, we want
                  to hear from you.
                </p>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Supply to Us
                </h2>
                <p className="text-gray-600 text-lg">
                  Excellence is built on a foundation of quality partnerships.
                  We are actively seeking reliable suppliers of high-grade
                  agricultural infrastructure and materials—from advanced
                  machinery and precision irrigation systems to nursery saplings
                  and organic inputs. If your products meet the highest
                  standards of quality and sustainability, let's explore a path
                  to mutual growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Initiate a Partnership
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Please provide your details below, and our partnership team will
                connect with you shortly.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Briefly describe your proposal or product line..."
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-700"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PartnerWithUs;
