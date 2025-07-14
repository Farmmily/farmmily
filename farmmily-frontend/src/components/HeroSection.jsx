import { useNavigate } from "react-router-dom";

const HeroSection = ({ heroImage, heading, subHeading, button1, button2 }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 58px)" }}
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Farm"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-end md:flex-row h-full px-6 md:px-10 text-white">
        {/* Left: Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-end gap-4 py-10">
          <h1 className="text-4xl md:text-6xl font-light max-w-xl font-serif tracking-wide leading-tight">
            {heading}
          </h1>
          <p className="text-base md:text-2xl max-w-xl font-extralight tracking-wide leading-relaxed">
            {subHeading}
          </p>
        </div>

        {/* Right: Buttons Section */}
        <div className="w-full md:w-1/2 flex justify-start md:justify-end items-end pb-10 md:pb-24 md:pr-20">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/own-a-farm")}
              className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-md font-semibold"
            >
              {button1}
            </button>
            <button
              onClick={() => navigate("/contact-us")}
              className="bg-white text-green-700 border border-green-600 hover:bg-green-100 transition px-6 py-3 rounded-md font-semibold"
            >
              {button2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
