import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";

const ComingSoon = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#e9f5ea] px-6"
      style={{
        backgroundImage: "url('/images/farmmily-bg-clear.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-lg shadow-xl max-w-2xl w-full text-center">
        <div className="flex justify-center mb-4">
          <FaLeaf className="text-green-700 text-5xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Something Fresh is Growing...
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          We're sowing the seeds of something exciting. Check back soon to see
          what’s sprouting at Farmmily!
        </p>
        <Link
          to="/"
          className="inline-block mt-4 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
        >
          Back to Home
        </Link>

        <div className="mt-8 text-sm text-gray-600">Stay connected:</div>
        <div className="flex justify-center items-center mt-2 gap-4 text-green-700 text-xl">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-900"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-900"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-900"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-900"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
