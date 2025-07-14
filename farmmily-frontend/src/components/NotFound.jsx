import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#f3f4f6] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-green-800 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-2 font-semibold">
        Oops! Page not found.
      </p>
      <p className="text-gray-500 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back to something fresh and green 🌿
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800 transition"
      >
        <FaHome /> Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
