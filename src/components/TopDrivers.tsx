import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { FaFlagCheckered, FaTrophy, FaUsers, FaMedal } from "react-icons/fa";
import type { StandingsSliceInitialState } from "@/Redux/features/standings/standingTypes";

const TopDrivers = ({
  standingData,
}: {
  standingData: StandingsSliceInitialState;
}) => {
  const topDrivers = standingData?.data?.slice(0, 5) || [];

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <h2 className="text-xl font-bold text-red-400 mb-4 flex justify-center">
        Top Drivers
      </h2>

      {standingData.isLoading && !standingData.data && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center justify-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading Top Drivers...</span>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topDrivers.map((driver) => (
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
        ))}
      </div>
    </div>
  );
};

export default TopDrivers;
