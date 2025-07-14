import React from "react";

const LeaseDetails = ({ tree }) => {
  return (
    <div className="w-full py-12">
      {/* Heading */}
      <h3 className="text-xl font-semibold text-black mb-6">Lease Details</h3>

      {/* Card */}
      <div className="w-full bg-white shadow-sm rounded-md px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
        {/* Lease Duration */}
        <div>
          <p className="text-green-700 font-normal text-md">Lease Duration</p>
          <p className="text-black text-base mt-1">{tree.leaseDuration}</p>
        </div>

        {/* Lease Amount */}
        <div>
          <p className="text-green-700 font-normal text-md">Lease Amount</p>
          <p className="text-black text-base mt-1">{tree.price}</p>
        </div>

        {/* Payment Structure */}
        <div>
          <p className="text-green-700 font-normal text-md">
            Payment Structure
          </p>
          <p className="text-black text-base mt-1">{tree.paymentStructure}</p>
        </div>
      </div>
    </div>
  );
};

export default LeaseDetails;
