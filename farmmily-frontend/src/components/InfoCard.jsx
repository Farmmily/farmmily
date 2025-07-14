import Medal from "/images/medal.png";

export default function InfoCard() {
  return (
    <section className="relative bg-slate-100 bg-cover bg-no-repeat bg-center py-16 overflow-hidden gap-6">
      {/* Flex container to align content and logo */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-center px-4 gap-6">
        {/* Center Card */}
        <div className="bg-white w-auto max-w-2xl rounded-2xl p-8 shadow-2xl text-center z-10 h-fit">
          <h2 className="text-3xl font-medium mb-4 gap-6 pb-10 leading-relaxed">
            Pure Farming. Nature Certified.
          </h2>

          <div className="flex justify-center mb-4">
            <img
              src={Medal}
              alt="Certification Medal"
              className="h-16 w-16 object-contain"
            />
          </div>

          <p className="text-gray-600 text-base leading-relaxed px-20 py-6">
            At Farmmily, we bring you closer to nature through transparent,
            certified farming practices. Our commitment to sustainability and
            purity ensures you not only own a tree, but contribute to a
            healthier planet.
          </p>
        </div>

        {/* Right Vertical Logo */}
        <div className="absolute top-1/2 -translate-y-1/2 -rotate-90 left-8 opacity-10 z-0">
          <img
            src="/images/farmmilyLogo.png"
            alt="Farmmily Logo"
            className="h-24 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
