import Driver from "@/components/Driver";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type { StandingsSliceInitialState } from "@/Redux/features/standings/standingTypes";
import type { StoreType, DispatchType } from "@/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchStandingsThunk from "@/Redux/features/standings/standingThunk";
import { useSearchParams } from "react-router-dom";

const Standings = () => {
  const standing: StandingsSliceInitialState = useSelector(
    (state: StoreType) => state.standings,
  );

  const dispatch: DispatchType = useDispatch();

  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: 5 }, (_, index) => currentYear - index);

  const [searchParams, setSearchParams] = useSearchParams();

  // get year from params
  const selectedYear = Number(searchParams.get("year") || currentYear);

  useEffect(() => {
    dispatch(fetchStandingsThunk(selectedYear));
  }, [dispatch, selectedYear]);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    // update URL params
    setSearchParams({ year });
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <div className="flex justify-center gap-20 items-start">
        <h1 className="text-5xl font-bold text-red-500 text-center mb-10">
          All Standing
        </h1>

        <select
          className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 p-3 mt-2"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {standing.isLoading && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading {selectedYear} Standing Data...</span>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {standing.data?.map((driver) => (
          <Driver
            key={driver.classificationId}
            driver={driver}
            year={selectedYear}
          />
        ))}
      </div>
    </div>
  );
};

export default Standings;
