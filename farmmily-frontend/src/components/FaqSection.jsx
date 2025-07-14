import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FaqSection = ({ faqs, image }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-6 py-12 bg-white flex flex-col md:flex-row gap-10 items-start">
      {/* FAQs Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold text-black mb-6">FAQs</h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-normal flex justify-between items-center"
              >
                {faq.question}
                <span className="  text-sm font-light">
                  {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-green-700 font-normal bg-white border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image}
          alt="FAQ Visual"
          className="w-full max-w-sm object-cover"
        />
      </div>
    </div>
  );
};

export default FaqSection;
