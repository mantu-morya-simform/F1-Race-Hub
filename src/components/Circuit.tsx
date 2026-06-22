import type { CircuitDataType } from "@/Redux/features/circuitTypes";
import React from "react";
import { FaClock, FaMapMarkerAlt, FaRoad, FaTrophy } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";

const Circuit = ({ circuit }: { circuit: CircuitDataType }) => {
  return (
    <div
      key={circuit.circuitId}
      className="bg-gray-800 text-white rounded-xl p-5
                shadow-md hover:shadow-xl transition-all duration-300
                border border-gray-700 hover:border-red-500
                flex flex-col justify-between h-full"
    >
      <div>
        {/* Circuit Name */}
        <h3 className="text-lg font-semibold text-red-400 mb-3 line-clamp-2 min-h-[48px]">
          {circuit.circuitName}
        </h3>

        {/* Location */}
        <p className="text-sm text-gray-300 flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-400" />
          {circuit.city}, {circuit.country}
        </p>

        {/* Circuit Length */}
        <p className="text-sm text-gray-400 mt-2 flex items-center gap-2">
          <MdOutlineTrackChanges className="text-red-400" />
          {circuit.circuitLength} m
        </p>

        {/* Corners */}
        <p className="text-sm text-gray-300 mt-2 flex items-center gap-2">
          <FaRoad className="text-red-400" />
          {circuit.numberOfCorners} Corners
        </p>

        {/* Lap Record */}
        <p className="text-sm text-gray-400 mt-2 flex items-center gap-2">
          <FaClock className="text-red-400" />
          {circuit.lapRecord}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-md">
          Since {circuit.firstParticipationYear}
        </span>

        <span className="text-xs text-green-400 font-medium flex items-center gap-1">
          <FaTrophy className="text-red-400" />
          {circuit.fastestLapYear}
        </span>
      </div>
    </div>
  );
};

export default Circuit;
