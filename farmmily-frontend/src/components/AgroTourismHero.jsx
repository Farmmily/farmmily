const AgroTourismHero = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <img
        src="/images/agrotourism/hero.png"
        alt="Agro Tourism Hero"
        className="absolute inset-0 w-full h-full  object-center"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Unplug. Unwind. Unearth Your Roots
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl">
          Experience the joy of slow living on a real organic farm — guided by
          the people who grow your food.
        </p>
      </div>
    </section>
  );
};

export default AgroTourismHero;
