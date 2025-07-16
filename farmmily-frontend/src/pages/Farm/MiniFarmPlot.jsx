import { useParams } from "react-router-dom";
import miniFarm from "../../data/miniFarm.json";
import TreeInformationSection from "../../components/TreeInformationSection";
import LeaseDetails from "../../components/LeaseDetails";
import FaqSection from "../../components/FaqSection";
import FunFact from "../../components/FunFact";
import TreeTestimonials from "../../components/TreeTestimonials";
import ExploreProducts from "../../components/ExploreProducts";
import Footer from "../../components/FooterHome";
import NameBoard from "../../components/NameBoard";
import { FaShoppingBag, FaGift } from "react-icons/fa";
const MiniFarmPlot = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Image Section */}
        <div className="flex gap-4 mb-6">
          {/* Main Image */}
          <div className="w-full">
            <img
              src="/images/mini-farm/minifarm.png"
              alt="Mini Farm"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            {/* Left side: Tree info */}
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-green-800">
                {miniFarm.name}
              </h1>
              <p className="text-gray-600 text-sm sm:pl-1">
                by <span className="font-medium">Farmmily</span>
              </p>
            </div>

            {/* Right side: Button */}
            <div className="flex justify-center sm:justify-end">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-3 rounded w-1/2 sm:w-64 flex items-center justify-center gap-2 transition h-14"
                onClick={() => {
                  setMessageType("buy");
                  setMessage(buyMessage);
                  const encodedMessage = encodeURIComponent(buyMessage);
                  const whatsappLink = `${import.meta.env.VITE_WHATSAPP_URI}${
                    import.meta.env.VITE_WHATSAPP_NUMBER
                  }?text=${encodedMessage}`;
                  window.open(whatsappLink, "_blank");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <FaShoppingBag />
                Contact Us Now
              </button>
            </div>
          </div>

          <div className="text-gray-700 space-y-4 mt-4">
            <p className="text-md font-semibold text-gray-600">Description</p>
            <p className="font-normal">
              Farmmily’s Mini Farm Plot lets you lease your own 650 sq ft
              seasonal organic farm in Aravakurichi, Karur.
            </p>

            <p>
              Choose from a variety of crops like leafy greens, root vegetables,
              legumes, and gourds—grown 100% naturally and managed by real
              farmers.
            </p>

            <p className="font-semibold">What You Get:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>A real, chemical-free farm plot cultivated for one season</li>
              <li>Personalized guidance on crop choices</li>
              <li>Transparent photo and video updates of your exact plot</li>
              <li>
                Transparent photo and video updates of your exact plot Home
                delivery of the entire harvest
              </li>
              <li>Optional farm visit for a hands-on farming experience</li>
            </ul>
          </div>
        </>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-6 bg-white">
          {/* LEFT: Text Section */}
          <div className="md:w-1/2 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Who is it for
              </h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                {miniFarm.whoIsItFor.split(/\./).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                What you get
              </h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                {miniFarm.whatYouGet.split(/\./).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="md:w-1/2">
            <img
              src="/images/treeDetails.png"
              alt={miniFarm.name}
              className="w-full h-auto rounded-lg object-cover items-center"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            How to Trust Your Tree and Its Organic Promise
          </h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            {miniFarm.howToTrustItsOrganic.split(/\./).map((point, index) => (
              <li key={index}>{point.trim()}</li>
            ))}
          </ul>
        </div>
        <LeaseDetails tree={miniFarm} />
        <FaqSection faqs={miniFarm.faqs} image="/images/faqImg.png" />
        <TreeTestimonials treeName={miniFarm.name} />
        <ExploreProducts />
      </div>
      <Footer />
    </>
  );
};

export default MiniFarmPlot;
