import { useNavigate } from "react-router-dom";

const PureFarmingSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-24 px-6"
      style={{
        backgroundImage: "url('/images/home/farming1.jpg')",
      }}
    >
      <div
        className="max-w-xl rounded-lg text-white mx-6 md:ml-16 pt-10 pb-30 shadow-md px-20"
        style={{
          backgroundColor: "rgba(34, 94, 34, 0.5)", // true transparent greenish shade
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Pure Farming. Nature Certified
        </h2>
        <p className="text-center mb-8">
          We’ve helped NRIs, investors, and landowners build and manage 400+
          acres of productive farms across Tamil Nadu, Kerala, and Karnataka.
        </p>
        <p className="text-center mb-12">
          From raw land to revenue-generating farms, Farmmily brings expertise,
          execution, and real ground results.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/about-us")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition"
          >
            Know More
          </button>
          <button
            onClick={() => navigate("/contact-us")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default PureFarmingSection;
