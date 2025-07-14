import { useParams } from "react-router-dom";
import beeHive from "../../data/beehive.json";
import TreeInformationSection from "../../components/TreeInformationSection";
import LeaseDetails from "../../components/LeaseDetails";
import FaqSection from "../../components/FaqSection";
import FunFact from "../../components/FunFact";
import TreeTestimonials from "../../components/TreeTestimonials";
import ExploreProducts from "../../components/ExploreProducts";
import Footer from "../../components/FooterHome";
import NameBoard from "../../components/NameBoard";
import { FaShoppingBag, FaGift } from "react-icons/fa";
const BeeHive = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Image Section */}
        <div className="flex gap-4 mb-6">
          {/* Main Image */}
          <div className="w-4/5">
            <img
              src="/images/beehive/beehive1.png"
              alt="Bee hive"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Side Images */}
          <div className="w-1/5 flex flex-col gap-4">
            <img
              src="/images/beehive/beehive2.png"
              alt="Side 1"
              className="h-1/2 object-cover rounded-lg"
            />
            <img
              src="/images/beehive/beehive3.png"
              alt="Side 2"
              className="h-1/2 object-cover rounded-lg"
            />
          </div>
        </div>
        <>
          <div className="flex justify-between items-start">
            {/* Left side: Tree info */}
            <div>
              <h1 className="text-4xl font-bold text-green-800">
                {beeHive.name}
              </h1>
              <p className="text-gray-600 text-sm pl-1">
                by <span className="font-medium">Farmmily</span>
              </p>
            </div>

            <div className="flex gap-4 ">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-3 rounded w-64 flex items-center justify-center gap-2 transition h-14"
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
            <p className="font-semibold">
              Own Your Honey Beehive with Farmmily
            </p>

            <p>
              Get 100% pure, raw honey from a hive that's yours—set in the heart
              of our lush, chemical-free farm in Idayakottai, Tamil Nadu. No
              additives. No sugar feeding. Just bees foraging freely among
              coconut, mango, moringa, and amla trees. This isn’t just honey —
              it’s your jar of nature’s magic, cold-filtered, unprocessed, and
              custom-labeled with your name.
            </p>

            <p className="font-semibold">What You Get:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>3.5–4 kg of raw honey from your personal hive</li>
              <li>Coconut Trees</li>
              <li>
                Delivered in beautifully labeled jars (with your name or logo)
              </li>
              <li>Optional premium gift packaging with a custom message</li>
              <li>Ownership certificate included</li>
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
                {beeHive.whoIsItFor.split(/\./).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Why It's Special
              </h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                {beeHive.whyItsSpecial.split(/\./).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="md:w-1/2">
            <img
              src="/images/treeDetails.png"
              alt={beeHive.name}
              className="w-full h-auto rounded-lg object-cover items-center"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            How to Trust Your Tree and Its Organic Promise
          </h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            {beeHive.howToTrustItsOrganic.split(/\./).map((point, index) => (
              <li key={index}>{point.trim()}</li>
            ))}
          </ul>
        </div>
        <LeaseDetails tree={beeHive} />
        <FunFact text={beeHive.funFact} badgeImage="/images/funFactImg.png" />
        <FaqSection faqs={beeHive.faqs} image="/images/faqImg.png" />
        <TreeTestimonials treeName="BeeHive" />
        <ExploreProducts />
      </div>
      <Footer />
    </>
  );
};

export default BeeHive;
