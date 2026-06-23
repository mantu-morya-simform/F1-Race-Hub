import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type {
  RaceDataType,
  RaceSliceInitialState,
} from "@/Redux/features/races/raceTypes";
import Race from "./Race";

const UpcomingRace = ({ races }: { races: RaceSliceInitialState }) => {
  const now = new Date();

  const upcomingRaces: RaceDataType[] | undefined = races?.data
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
        {upcomingRaces?.map((race: RaceDataType) => (
          <Race race={race} key={race.raceId} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingRace;
