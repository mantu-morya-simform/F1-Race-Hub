import type { StandingsDataType } from "@/Redux/features/standings/standingTypes";
import { FaFlagCheckered, FaMedal, FaTrophy, FaUsers } from "react-icons/fa";

const Driver = ({ driver }: { driver: StandingsDataType }) => {
  return (
    <div
      key={driver.classificationId}
      className="bg-gray-800 text-white rounded-xl p-5
                shadow-md hover:shadow-xl transition-all duration-300
                border border-gray-700 hover:border-red-500
                flex flex-col justify-between h-full"
    >
      <div>
        {/* Driver Name */}
        <h3 className="text-lg font-semibold text-red-400 line-clamp-2 min-h-[48px] flex items-center gap-2">
          <FaMedal className="text-red-400" />#{driver.position}{" "}
          {driver.driver.name} {driver.driver.surname}
        </h3>

        {/* Team */}
        <p className="text-sm text-gray-400 mt-2 flex items-center gap-2">
          <FaUsers className="text-red-400" />
          {driver.team.teamName}
        </p>

        {/* Points */}
        <p className="text-sm text-gray-300 mt-3 flex items-center gap-2">
          <FaFlagCheckered className="text-red-400" />
          {driver.points} pts
        </p>

        {/* Wins */}
        <p className="text-sm text-gray-400 flex items-center gap-2 mt-2">
          <FaTrophy className="text-red-400" />
          {driver.wins} wins
        </p>
      </div>
    </div>
  );
};

export default Driver;
