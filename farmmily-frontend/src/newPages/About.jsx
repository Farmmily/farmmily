import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  Users,
  Target,
  Sprout,
} from "lucide-react";
import Footer from "../newComponents/Footer";

const ValuesCarousel = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const values = [
    {
      title: "CLIENT PROSPERITY FIRST",
      content:
        "We exist for the prosperity of our clients. This is our non-negotiable standard and the only true measure of our success.",
      icon: Target,
    },
    {
      title: "UNCOMPROMISING ACCOUNTABILITY",
      content:
        "We own the outcome, not just the task. Having an uncompromising mindset is fundamental to our very existence.",
      icon: Leaf,
    },
    {
      title: "THE POWER OF ONE TEAM",
      content:
        "We are a single, unified force driven by a shared vision. We believe no individual is as powerful as our collective team.",
      icon: Users,
    },
    {
      title: "FUTURE-FOCUSED STEWARDSHIP",
      content:
        "We are proactive leaders in progress and responsible stewards of the land for future generations.",
      icon: Sprout,
    },
  ];

  const nextValue = () => {
    setCurrentValue((prev) => (prev + 1) % values.length);
  };

  const prevValue = () => {
    setCurrentValue((prev) => (prev - 1 + values.length) % values.length);
  };

  useEffect(() => {
    const interval = setInterval(nextValue, 6000);
    return () => clearInterval(interval);
  }, []);

  const IconComponent = values[currentValue].icon;

  return (
    <>
      <div className="flex justify-center items-center px-4 sm:px-8">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
          {/* Circular Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full shadow-2xl border border-gray-200">
            <div className="absolute inset-0 opacity-5 rounded-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-600/20 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Navigation Buttons - moved outside circle */}
          <button
            onClick={prevValue}
            className="absolute -left-6 sm:-left-8 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextValue}
            className="absolute -right-6 sm:-right-8 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight size={20} />
          </button>

          {/* Content - properly contained within circle */}
          <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-16">
            <div className="text-center transition-all duration-500 ease-in-out transform w-full max-w-xs">
              <div className="mb-4 flex justify-center">
                <div className="bg-gray-700 p-3 rounded-full shadow-lg">
                  <IconComponent size={20} className="text-white" />
                </div>
              </div>

              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-3 tracking-wide leading-tight">
                {values[currentValue].title}
              </h3>

              <div className="w-12 h-0.5 bg-gray-600 mx-auto mb-3 rounded-full"></div>

              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                {values[currentValue].content}
              </p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentValue(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentValue
                    ? "bg-gray-700 scale-125"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="page-header-bg text-white bg-[url(/images/about_us.png)] bg-cover bg-center">
          <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center bg-black/50">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              About Farmmily Agro Infra Developers Pvt Ltd
            </h1>
          </div>
        </section>

        {/* Intro Section - Centered Card */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Engineering Prosperity from the Ground Up
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Farmmily is a premier agricultural asset management firm
                    founded to unlock the immense potential of India's land. We
                    are architects of agricultural transformation, converting
                    underutilized land into high-performing, sustainable
                    portfolios. By synergizing deep-rooted agricultural wisdom
                    with cutting-edge engineering, we deliver turnkey ventures
                    that create significant value for our clients, our
                    communities, and our nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Animated Cards */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div
                className={`bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-500 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To engineer profitable agricultural assets that actively
                    contribute to a carbon-neutral future through sustainable
                    practices and strategic carbon sequestration.
                  </p>
                </div>
              </div>

              <div
                className={`bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-500 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sprout className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To redefine India's agricultural landscape, creating a
                    future where ecological stewardship and economic prosperity
                    are one and the same.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Commitment - Styled Card */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 sm:p-8 lg:p-12 border border-gray-200 shadow-md">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="text-white" size={32} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    A Commitment to a Greener India
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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
            </div>
          </div>
        </section>

        {/* Mission Statement Card */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    What is Good for the Farmer is Good for Farmmily
                  </h2>
                  <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="text-center">
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    This belief has shaped our ambitions and actions since
                    inception. We recognize that while agriculture is the
                    heartbeat of our country, the challenges of modern farming
                    require new solutions. We have evolved to become the
                    definitive partner in agricultural success, providing
                    expert-led solutions and ensuring flawless on-ground
                    execution. We take on the complexities and hard work, so our
                    clients can focus on the growth—of their land, their
                    livelihoods, and their families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Values & Behaviours
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are guided by a single creed that defines our conduct and
                fuels our purpose. These are not merely words; they are the
                principles by which we operate, every day, without exception.
              </p>
            </div>

            <div className="mb-16">
              <ValuesCarousel />
            </div>
          </div>
        </section>

        {/* Core Values Grid - 2x2 on mobile, 4x1 on desktop */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {[
                {
                  title: "Integrity",
                  desc: "Building partnerships on a foundation of absolute transparency and trust.",
                  icon: "🤝",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  title: "Innovation",
                  desc: "Leveraging agri-tech and data analytics to engineer future-ready, sustainable assets.",
                  icon: "💡",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  title: "Sustainability",
                  desc: "Acting as custodians of the land, engineering projects that enhance ecological balance for future generations.",
                  icon: "🌱",
                  color: "from-green-500 to-green-600",
                },
                {
                  title: "Excellence",
                  desc: "Upholding the highest standards of quality, from strategic planning to execution, to deliver agricultural legacies.",
                  icon: "⭐",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className={`bg-white p-4 sm:p-6 rounded-xl text-center border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
