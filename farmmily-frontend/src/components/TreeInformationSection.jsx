import { useState } from "react";
import { FaShoppingBag, FaGift } from "react-icons/fa";

const TreeInformationSection = ({ tree }) => {
  const [messageType, setMessageType] = useState("buy");
  const [message, setMessage] = useState("");

  const buyMessage = `Hello, I am interested in buying your ${tree.name}`;
  const giftMessage = `Hello, I am interested in gifting your ${tree.name} to a friend`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
      {/* LEFT: Tree Info */}
      <div className="bg-green-50 p-6 rounded-md md:w-1/2">
        <h2 className="text-lg font-semibold mb-4 text-black">
          Tree Information
        </h2>
        <ul className="space-y-3 text-sm text-gray-800">
          <li>
            <span className="text-green-800 font-medium">Tree Age:</span>{" "}
            {tree.treeInformation.treeAge}
          </li>
          <li>
            <span className="text-green-800 font-medium">Estimated Yield:</span>{" "}
            {tree.treeInformation.estimatedYield}
          </li>
          <li>
            <span className="text-green-800 font-medium">Harvest Season:</span>{" "}
            {tree.treeInformation.harvestSeason}
          </li>
          <li>
            <span className="text-green-800 font-medium">Farming Method:</span>{" "}
            {tree.treeInformation.farmingMethod}
          </li>
          <li>
            <span className="text-green-800 font-medium">Farm Location:</span>{" "}
            {tree.treeInformation.farmLocation}
          </li>
        </ul>
      </div>

      {/* RIGHT: Description + Buttons */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <h2 className="text-md font-semibold mb-2 text-black">Description:</h2>
        <p className="text-gray-700 text-base mb-6 leading-relaxed">
          {tree.description}
        </p>

        <div className="flex gap-4">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-3 rounded w-1/2 flex items-center justify-center gap-2 transition"
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
            className="border border-green-700 text-green-700 px-4 py-3 rounded w-1/2 flex items-center justify-center gap-2 hover:bg-green-50 transition"
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
    </div>
  );
};

export default TreeInformationSection;
