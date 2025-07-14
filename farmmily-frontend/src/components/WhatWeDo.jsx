const WhatWeDo = () => {
  const items = [
    "250+ acres under management",
    "8+ farms built from zero",
    "Strong local ground team",
    "Transparent updates & progress reports",
    "Flexible services: short-term or full-time",
    "Trusted by NRIs, real estate investors & families",
  ];

  return (
    <section className="bg-white py-6">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-10">
        Why Choose Farmmily?
      </h2>

      {/* Grid of boxes */}
      <div className="w-full bg-[#4f6835] pt-10 pb-10 mb-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-4 border-[#d5e5cc] p-6 rounded-md shadow-sm bg-white text-center font-medium text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Centered, smaller image */}
        {/* <div className="mt-10 flex justify-center">
        <img
        src="/images/farmServices/img.png"
        alt="What we do"
        className="w-1/3 h-auto object-contain"
        />
        </div> */}
      </div>
    </section>
  );
};

export default WhatWeDo;
