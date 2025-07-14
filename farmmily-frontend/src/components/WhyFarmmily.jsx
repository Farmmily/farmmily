const whyItems = [
  {
    title: "Natural Farming",
    image: "/images/natural.png",
    desc: "No chemicals, no shortcuts",
  },
  {
    title: "Own a Farm",
    image: "/images/farm.png",
    desc: "Experience real ownership",
  },
  {
    title: "From Soil to Soul",
    image: "/images/soil.png",
    desc: "Visit, learn, and enjoy",
  },
  {
    title: "Delivered to you",
    image: "/images/delivery.png",
    desc: "Fresh from the soil",
  },
];

export default function WhyFarmmily() {
  return (
    <section className="bg-slate-50 py-14 px-4">
      {/* Heading */}
      <div className="text-center mb-10 px-2">
        <h2 className="text-3xl sm:text-5xl font-semibold text-green-900 pb-2">
          Why FARMMILY
        </h2>
        <p className="mt-2 text-green-900 text-sm sm:text-base max-w-xl mx-auto">
          Farmmily best products formulated by nature that provide the best
          benefits for your health.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center max-w-6xl mx-auto px-2 sm:px-4">
        {whyItems.map((item, idx) => (
          <div key={idx} className="text-center w-full max-w-[200px]">
            <div className="w-32 h-32 relative mx-auto">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <clipPath id={`blob-${idx}`}>
                    <path
                      fill="#F0F0F0"
                      d="M48.2,-55.6C62.3,-45.3,73.6,-30.1,72.6,-15.5C71.6,-1,58.3,12.8,47.1,23.5C35.8,34.2,26.6,41.7,15.3,49.3C3.9,56.9,-9.6,64.6,-22.7,61.8C-35.7,59,-48.2,45.7,-55.6,30.9C-63,16.1,-65.3,0,-61.7,-14.6C-58.1,-29.3,-48.6,-42.5,-36.3,-54.4C-24,-66.3,-12,-76.8,2.3,-79.9C16.6,-83,33.2,-78.3,48.2,-68.7Z"
                      transform="translate(100 100)"
                    />
                  </clipPath>
                </defs>
                <image
                  href={item.image}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#blob-${idx})`}
                />
              </svg>
            </div>
            <h3 className="text-base font-medium text-green-900 mt-3">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
