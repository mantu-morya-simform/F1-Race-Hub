import DriverData from "@/components/DriverData";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import fetchDriversThunk from "@/Redux/features/drivers/driverThunk";
import type {
  DriverDataType,
  DriverSliceInitialState,
} from "@/Redux/features/drivers/driverTypes";
import type { DispatchType, StoreType } from "@/Redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Drivers = () => {
  const drivers: DriverSliceInitialState = useSelector(
    (state: StoreType) => state.drivers,
  );

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    if (!drivers.data || drivers.data.length === 0) {
      dispatch(fetchDriversThunk());
    }
  }, [dispatch, drivers.data]);

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <h1 className="text-5xl font-bold text-red-500 text-center mb-10">
        All Drivers
      </h1>

      {drivers.isLoading && !drivers.data && (
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
        {drivers.data?.map((driver: DriverDataType) => (
          <DriverData key={driver.driverId} driver={driver} />
        ))}
      </div>
    </div>
  );
};

export default Drivers;
