import React from "react";

import { useNavigate } from "react-router-dom";

export default function FarmingCTA() {
  const navigate = useNavigate();

  return (
    <section
      className="bg-cover py-20 h-120 flex items-center justify-center"
      style={{ backgroundImage: "url('/images/farmingCtaBg.png')" }}
    >
      <div className="sm:max-w-xl mx-auto bg-slate-100 rounded-xl shadow-lg p-15 text-left gap-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#659f41] mb-4">
          Ready to Begin Your Farming Journey?
        </h2>
        <p className="text-gray-800 text-sm sm:text-base mb-6">
          Join thousands of urban wellers who have reconnected with their food
          sources and become part-time farmers with Farmmily.
        </p>
        <div className="flex justify-start gap-8">
          <button
            onClick={() => navigate("/farm-services")}
            className="bg-[#659f41] text-white px-6 py-2 rounded-3xl hover:bg-green-800 transition"
          >
            Farm Services
          </button>
          <button
            onClick={() => navigate("/own-a-farm")}
            className="bg-[#f3f8ed] text-[#659f41] font-medium border border-[#659f41] px-6 py-2 rounded-3xl hover:bg-white transition"
          >
            Own a Farm
          </button>
        </div>
      </div>
    </section>
  );
}
