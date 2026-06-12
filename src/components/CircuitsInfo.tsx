import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { FaMapMarkerAlt, FaClock, FaRoad, FaTrophy } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";
import type { CircuitSliceInitialState } from "@/Redux/features/circuits/circuitTypes";

const CircuitsInfo = ({ circuits }: { circuits: CircuitSliceInitialState }) => {
  const topCircuits = circuits?.data?.slice(0, 5) || [];

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <h2 className="text-xl font-bold text-red-400 mb-6 text-center">
        Top Circuits
      </h2>

      {circuits.isLoading && !circuits.data && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading Circuits...</span>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topCircuits.map((circuit) => (
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
        ))}
      </div>
    </div>
  );
};

export default CircuitsInfo;
