import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type {
  StandingsDataType,
  StandingsSliceInitialState,
} from "@/types/standingTypes";
import Driver from "./Driver";

const TopDrivers = ({
  standingData,
}: {
  standingData: StandingsSliceInitialState;
}) => {
  const topDrivers: StandingsDataType[] = standingData?.data?.slice(0, 5) || [];
  const currentYear = new Date().getFullYear();
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
        {topDrivers.map((driver: StandingsDataType) => (
          <Driver driver={driver} key={driver.driverId} year={currentYear} />
        ))}
      </div>
    </div>
  );
};

export default TopDrivers;
