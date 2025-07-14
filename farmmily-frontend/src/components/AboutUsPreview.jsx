import { useNavigate } from "react-router-dom";
import farmmilyLogo from "/images/farmmilyLogo.png"; // ensure correct path

const AboutUsPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[400px] flex bg-black text-white">
      {/* Left Half */}
      <div className="w-5/8 flex flex-col justify-center items-start pl-30">
        <h2 className="text-4xl font-medium mb-4 font-sans">About Us</h2>
        <p className="text-lg mb-6 max-w-3xl leading-relaxed font-extralight">
          Farmmily is redefining the connection between people and farms.
          Discover how we’re building a sustainable and inclusive farming
          ecosystem for everyone, everywhere.
        </p>
        <button
          onClick={() => navigate("/about")}
          className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Learn More
        </button>
      </div>

      {/* Right Half */}
      <div className="w-3/8 flex items-center justify-center pr-12">
        <img
          src={farmmilyLogo}
          alt="Farmmily Logo"
          className="h-40 md:h-52 lg:h-60 object-contain opacity-65"
        />
      </div>
    </div>
  );
};

export default AboutUsPreview;
