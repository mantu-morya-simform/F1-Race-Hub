import type { RaceDataType } from "@/Redux/features/raceTypes";
import { FaClock, FaFlagCheckered, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";

const Race = ({ race }: { race: RaceDataType }) => {
  const raceDate = new Date(
    `${race.schedule.race.date}T${race.schedule.race.time}`,
  );
  return (
    <div
      key={race.raceId}
      className="bg-gray-800 text-white rounded-xl p-5
                shadow-md hover:shadow-xl transition-all duration-300
                border border-gray-700 hover:border-red-500
                flex flex-col justify-between h-full"
    >
      {/* top content */}
      <div>
        {/* race name */}
        <h3 className="text-lg font-semibold text-red-400 mb-2 line-clamp-2 min-h-[48px]">
          {race.raceName}
        </h3>

        {/* location */}
        <p className="text-sm text-gray-300 flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-400" />
          {race.circuit.city}, {race.circuit.country}
        </p>

        {/* circuit */}
        <p className="text-sm text-gray-400 mt-1 flex items-center gap-2">
          <MdOutlineTrackChanges />
          {race.circuit.circuitName}
        </p>

        {/* date */}
        <p className="text-sm text-gray-300 mt-3 flex items-center gap-2">
          <FaFlagCheckered className="text-red-400" />
          {raceDate.toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </p>

        {/* time */}
        <p className="text-sm text-gray-400 flex items-center gap-2">
          <FaClock />
          {raceDate.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      {/* footer */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-md">
          Round {race.round}
        </span>

        <span className="text-xs text-green-400 font-medium">Upcoming</span>
      </div>
    </div>
  );
};

export default Race;
