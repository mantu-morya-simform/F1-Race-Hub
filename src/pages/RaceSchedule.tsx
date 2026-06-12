import Race from "@/components/Race";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import fetchRaceThunk from "@/Redux/features/races/raceThunk";
import type {
  RaceDataType,
  RaceSliceInitialState,
} from "@/Redux/features/races/raceTypes";
import type { DispatchType, StoreType } from "@/Redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RaceSchedule = () => {
  const races: RaceSliceInitialState = useSelector(
    (state: StoreType) => state.races,
  );

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    if (!races.data || races.data.length === 0) {
      dispatch(fetchRaceThunk());
    }
  }, [dispatch, races.data]);
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <h1 className="text-5xl font-bold text-red-500 text-center mb-10">
        All Circuits
      </h1>

      {races.isLoading && !races.data && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading Race Data...</span>
          </Button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {races.data?.map((race: RaceDataType) => (
          <Race key={race.raceId} race={race} />
        ))}
      </div>
    </div>
  );
};

export default RaceSchedule;
