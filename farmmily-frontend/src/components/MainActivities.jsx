import { FaWhatsapp } from "react-icons/fa";

const MainActivities = () => {
  const topActivities = [
    {
      image: "/images/agrotourism/activity1.png",
      label: "Milk cows & walk with goats at sunset",
    },
    {
      image: "/images/agrotourism/activity2.png",
      label: "Catch live temple festivals & folk traditions",
    },
    {
      image: "/images/agrotourism/activity3.png",
      label: "Relax at the nearby dam or try fishing",
    },
    {
      image: "/images/agrotourism/activity4.png",
      label: "Visit the local farmers' market (sandhai)",
    },
  ];

  const otherActivities = [
    "Tractor ride through deep farm trails",
    "Splash in the village water tank (thotti)",
    " Breathe inside a 6 lakh-tree forest",
    "Plant your own tree and tag your name",
    "Explore how local villagers live, cook & care",
    " See how food is sun-dried in our solar dryer",
    " Pose for farm-life photos you'll never forget",
    "Try traditional farming—sow, water, harvest",
  ];

  const packages = [
    {
      title: "Package",
      content: "Overnight Stay",
    },
    {
      title: "Duration",
      content: "2 Days / 1 Night",
    },
    {
      title: "Includes",
      content:
        "Stay, meals, activities, farm guide, evening bonfire & local experience",
    },
    {
      title: "Price",
      content: "₹5,499 (up to 4 guests)",
    },
  ];

  const whatsappLink = `${import.meta.env.VITE_WHATSAPP_URI}${
    import.meta.env.VITE_WHATSAPP_NUMBER
  }?text=I'm%20interested%20in%20booking%20the%20Agro%20Tourism%20package`;

  return (
    <section className="bg-white py-16 px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        Main Activities on the Farm
      </h2>

      {/* Top Activity Images */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {topActivities.map((activity, index) => (
          <div key={index} className="text-center">
            <img
              src={activity.image}
              alt={activity.label}
              className="w-full h-48 object-cover rounded shadow"
            />
            <p className="mt-2 font-medium text-gray-700">{activity.label}</p>
          </div>
        ))}
      </div>

      {/* Other Intriguing Activities */}
      <h3 className="text-2xl font-semibold text-center  mb-6">
        Other Intriguing Activities
      </h3>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-12 mb-16 px-4">
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {otherActivities.slice(0, 4).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {otherActivities.slice(4).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Package Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-gray-800 px-2 md:px-0">
        {packages.map((pkg, index) => (
          <div key={index} className="rounded overflow-hidden shadow">
            <div className="bg-[#d5e5cc] text-black font-semibold text-center py-2">
              {pkg.title}
            </div>
            <div className="bg-white text-center py-4 px-3">{pkg.content}</div>
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <div className="flex justify-center">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow transition"
        >
          <FaWhatsapp className="text-xl" />
          Book Now on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default MainActivities;
