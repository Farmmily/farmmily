import React from "react";
import Footer from "../newComponents/Footer";

const Contact = () => {
  return (
    <>
      <main>
        {/* Header Section */}
        <section className="page-header-bg text-white">
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {/* Intro */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We welcome your inquiries. Please use the form below to send us
                a message, or contact us directly through one of the channels
                listed. Our team will respond to you promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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
                      placeholder="Subject of Inquiry"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      placeholder="Briefly describe your project or requirement..."
                      rows="5"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-700"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold mb-3">Corporate Office</h3>
                  <p className="text-gray-600 text-lg">
                    57, CK Colony, New Siddhapudur,
                    <br />
                    Coimbatore - 641044, Tamil Nadu
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold mb-3">Email Us</h3>
                  <p className="text-gray-600 text-lg">contact@farmmily.com</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold mb-3">Call Us</h3>
                  <p className="text-gray-600 text-lg">+91 77088 47977</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
