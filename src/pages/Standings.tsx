import Driver from "@/components/Driver";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type { StandingsSliceInitialState } from "@/Redux/features/standings/standingTypes";
import type { StoreType, DispatchType } from "@/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchStandingsThunk from "@/Redux/features/standings/standingThunk";
const Standings = () => {
  const standing: StandingsSliceInitialState = useSelector(
    (state: StoreType) => state.standings,
  );

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    if (!standing.data || standing.data.length === 0) {
      dispatch(fetchStandingsThunk());
    }
  }, [dispatch, standing.data]);

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <h1 className="text-5xl font-bold text-red-500 text-center mb-10">
        All Standing
      </h1>

      {standing.isLoading && !standing.data && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading Standing Data...</span>
          </Button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {standing.data?.map((driver) => (
          <Driver key={driver.classificationId} driver={driver} />
        ))}
      </div>
    </div>
  );
};

export default Standings;
