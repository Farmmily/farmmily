import {
  FaBed,
  FaBath,
  FaUtensils,
  FaDoorOpen,
  FaTint,
  FaTree,
  FaRoad,
  FaShieldAlt,
  FaCar,
} from "react-icons/fa";

const YourStay = () => {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Your Stay – Private Farm House Villa
      </h2>

      {/* Image and description */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 mb-12">
        <img
          src="/images/agrotourism/stay.png"
          alt="Farmhouse Villa"
          className="w-full lg:w-1/2 rounded-md shadow-md object-cover"
        />
        <div className="lg:w-1/2 space-y-4 text-gray-700 pr-4 lg:pl-8 lg:pt-20">
          <h3 className="text-xl font-semibold 0">Description</h3>
          <p>
            Escape to your own traditional style villa nestled in lush greenery.
            Enjoy spacious rooms, vintage wooden interiors, open kitchens, and
            cozy outdoor spots — all designed for comfort, charm, and connection
            to rural life.
          </p>
          <p>
            Perfect for unwinding, reconnecting, and experiencing farm living
            with just the right touch of privacy.
          </p>

          <h3 className="text-xl font-semibold  mt-8">Location</h3>
          <p>
            <strong>Farm Location:</strong> Idayakottai, Tamil Nadu
          </p>
          <p>
            <strong>Distance from major points:</strong> <br />
            Dindigul – 34 km (~37 mins) <br />
            Karur – 50 km (~45 mins) <br />
            Coimbatore Airport – 111 km (~1 hr 50 mins)
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 px-4">
        {/* Facilities */}
        <div className="max-w-[300px]">
          <h4 className="text-2xl font-semibold mb-4">Facilities</h4>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center gap-2">
              <FaBed className="text-gray-600 text-3xl" />
              <span>2 Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUtensils className="text-gray-600 text-3xl" />
              <span>Full Kitchen</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBath className="text-gray-600 text-3xl" />
              <span>Washroom</span>
            </div>
            <div className="flex items-center gap-2">
              <FaDoorOpen className="text-gray-600 text-3xl" />
              <span>Dining Hall</span>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div className="max-w-[320px]">
          <h4 className="text-xl font-semibold  mb-4">Accessibility</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FaTint className="text-gray-600 mt-1 text-xl" />
              <span>Pure natural well water</span>
            </li>
            <li className="flex items-start gap-2">
              <FaTree className="text-gray-600 mt-1 text-xl" />
              <span>Surrounded by trees, birds, and peace</span>
            </li>
            <li className="flex items-start gap-2">
              <FaRoad className="text-gray-600 mt-1 text-xl" />
              <span>Tarred roads all the way to the farm gate</span>
            </li>
          </ul>
        </div>

        {/* Security */}
        <div className="max-w-[320px]">
          <h4 className="text-xl font-semibold 0 mb-4">Security</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FaShieldAlt className="text-gray-600 mt-1 text-xl" />
              <span>24x7 CCTV security for full peace of mind</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCar className="text-gray-600 mt-1 text-xl" />
              <span>Smooth access for all vehicle types</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YourStay;
