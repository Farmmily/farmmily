import { useParams } from "react-router-dom";
import treesData from "../../data/trees.json";
import TreeInformationSection from "../../components/TreeInformationSection";
import LeaseDetails from "../../components/LeaseDetails";
import FaqSection from "../../components/FaqSection";
import FunFact from "../../components/FunFact";
import TreeTestimonials from "../../components/TreeTestimonials";
import ExploreProducts from "../../components/ExploreProducts";
import Footer from "../../components/FooterHome";
import NameBoard from "../../components/NameBoard";
import { FaShoppingBag, FaGift } from "react-icons/fa";
const TreeDetails = () => {
  const { treeSlug } = useParams();
  const tree = treesData.find((t) => t.slug === treeSlug);

  if (!tree) {
    return (
      <div className="text-center py-20 text-red-500 text-xl">
        Tree not found
      </div>
    );
  }

  const originalPrice = parseInt(tree.price.replace(/[^\d]/g, ""));
  const actualPrice = Math.round(originalPrice * 1.2);
  const savings = actualPrice - originalPrice;

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Image Section */}
        <div className="flex gap-4 mb-6">
          {/* Main Image */}
          <div className="w-4/5">
            <img
              src={tree.images[0]}
              alt={tree.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Side Images */}
          <div className="w-1/5 flex flex-col gap-4">
            <img
              src={tree.images[1]}
              alt="Side 1"
              className="h-1/2 object-cover rounded-lg"
            />
            <img
              src={tree.images[2]}
              alt="Side 2"
              className="h-1/2 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Title & Price Section */}
        {tree.isBulkLeasing ? (
          <>
            <div className="flex justify-between items-start">
              {/* Left side: Tree info */}
              <div>
                <h1 className="text-4xl font-bold text-green-800">
                  {tree.name}
                </h1>
                <p className="text-gray-600 text-sm pl-1">
                  by <span className="font-medium">Farmmily</span>
                </p>
              </div>

              <div className="flex gap-4 ">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-3 rounded w-48 flex items-center justify-center gap-2 transition h-14"
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
                  Buy Now
                </button>

                <button
                  className="h-14 border border-green-700 text-green-700 px-4 py-3 rounded w-48 flex items-center justify-center gap-2 hover:bg-green-50 transition"
                  onClick={() => {
                    setMessageType("gift");
                    setMessage(giftMessage); // if needed elsewhere in UI

                    const encodedMessage = encodeURIComponent(giftMessage);
                    const whatsappLink = `${import.meta.env.VITE_WHATSAPP_URI}${
                      import.meta.env.VITE_WHATSAPP_NUMBER
                    }?text=${encodedMessage}`;

                    window.open(whatsappLink, "_blank");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <FaGift />
                  Gift for a Friend
                </button>
              </div>
            </div>

            <div className="text-gray-700 space-y-4 mt-4">
              <p className="text-md font-semibold text-gray-600">Description</p>
              <p>Grow Together. Eat Better. Live Organic.</p>

              <p>
                Farmmily’s <strong>Bulk Leasing</strong> lets you and your
                community grow real food together —
                <strong> 100% organically</strong>, without owning farmland.
              </p>

              <p>
                Whether you're a group of <strong>5+ families</strong>, a school
                parent circle, an organic store, or a conscious community, this
                is your chance to lease multiple trees, mini-farms, or even
                honey hives — and enjoy <strong>chemical-free food</strong> with
                full transparency.
              </p>

              <p className="font-semibold">What You Can Lease in Bulk</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  Mango Trees (
                  <em>Alphonso, Imam Pasand, Totapuri, Senthura</em>)
                </li>
                <li>Coconut Trees</li>
                <li>
                  Honey Bee Hives (<em>Pure forest-edge honey</em>)
                </li>
                <li>Amla, Moringa & Fruit Trees</li>
                <li>
                  Seasonal Mini Farm Plots (<em>Vegetables, herbs, millets</em>)
                </li>
                <li>Goat, hens</li>
              </ul>

              <p>
                Everything is grown at our{" "}
                <strong>fully chemical-free zone</strong> in Idayakottai (Karur)
                — home to
                <strong> 6 lakh native trees</strong>, forest breezes, and
                native bees.
              </p>

              <p className="font-semibold">
                It’s more than a farm — it’s a living, thriving organic
                ecosystem.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-start">
              {/* Left side: Tree info */}
              <div>
                <h1 className="text-4xl font-bold text-green-800">
                  {tree.name}
                </h1>
                <p className="text-gray-600 text-sm pl-1">
                  by <span className="font-medium">Farmmily</span>
                </p>
              </div>

              {/* Right side: Price info */}
              <div className="text-right">
                <p className="text-2xl font-semibold text-green-800 text-left">
                  {tree.price}
                </p>
                <div className="flex flex-row gap-2">
                  <p className="line-through text-sm text-gray-500">
                    ₹{actualPrice}
                  </p>
                  <p className="text-green-600 text-sm font-medium">
                    Save ₹{savings}
                  </p>
                </div>
              </div>
            </div>
            <TreeInformationSection tree={tree} />
          </>
        )}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-6 bg-white">
          {/* LEFT: Text Section */}
          <div className="md:w-1/2 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Who is it for
              </h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                {tree.whoIsItFor.split(/\./).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                What You Get
              </h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                {tree.whatYouGet.split(/\./).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="md:w-1/2">
            <img
              src="/images/treeDetails.png"
              alt={tree.name}
              className="w-full h-auto rounded-lg object-cover items-center"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            How to Trust Your Tree and Its Organic Promise
          </h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            {tree.howToTrustItsOrganic.split(/\./).map((point, index) => (
              <li key={index}>{point.trim()}</li>
            ))}
          </ul>
        </div>
        <LeaseDetails tree={tree} />
        {tree.isNameBoard && <NameBoard treeName={tree.name} />}
        <FunFact text={tree.funFact} badgeImage="/images/funFactImg.png" />
        <FaqSection faqs={tree.faqs} image="/images/faqImg.png" />
        <TreeTestimonials treeName={tree.name} />
        <ExploreProducts />
      </div>
      <Footer />
    </>
  );
};

export default TreeDetails;
