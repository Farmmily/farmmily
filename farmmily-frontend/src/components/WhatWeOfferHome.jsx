export default function WhatWeOfferHome() {
  const offers = [
    {
      img: "/images/home/cs1.png",
      text: "End-to-end farm development from raw land",
    },
    {
      img: "/images/home/cs2.png",
      text: "Full-service farm management across South India",
    },
    {
      img: "/images/home/cs3.png",
      text: "Expert consulting and crop planning for landowners",
    },
    {
      img: "/images/home/cs4.png",
      text: "Transparent, phase-wise execution and reporting",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-12">
        What we offer to them
      </h2>

      {/* Flex Layout */}
      <div className="max-w-6xl  mx-auto flex flex-wrap justify-center gap-8">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="w-64 h-auto border-[5px] border-[#d5e5cc] rounded-lg flex flex-col justify-evenly text-center px-4 bg-[#d5e5cc] shadow-sm py-3"
          >
            <div>
              <img src={offer.img} className="w-full h-48" />
            </div>
            <div>
              <p className="text-gray-800 bg-white text-md font-medium pt-2 pb-2 px-4 mt-4">
                {offer.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
