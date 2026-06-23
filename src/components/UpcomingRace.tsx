import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { FaMapMarkerAlt, FaFlagCheckered, FaClock } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";
import type { RaceSliceInitialState } from "@/Redux/features/races/raceTypes";

const UpcomingRace = ({ races }: { races: RaceSliceInitialState }) => {
  const now = new Date();

  const upcomingRaces = races?.data
    ?.filter((race) => {
      const raceDate = new Date(
        `${race.schedule.race.date}T${race.schedule.race.time}`,
      );
      return raceDate > now;
    })
    .slice(0, 5);

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <h2 className="text-xl font-bold text-red-400 mb-6 text-center">
        Upcoming Races
      </h2>

      {races.isLoading && !races.data && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading Upcoming Races...</span>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {upcomingRaces?.map((race) => {
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

                <span className="text-xs text-green-400 font-medium">
                  Upcoming
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingRace;
