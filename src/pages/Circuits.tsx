import Circuit from "@/components/Circuit";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import fetchCircuitsThunk from "@/Redux/features/circuits/circuitThunk";
import type {
  CircuitDataType,
  CircuitSliceInitialState,
} from "@/Redux/features/circuits/circuitTypes";
import type { DispatchType, StoreType } from "@/Redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Circuits = () => {
  const circuits: CircuitSliceInitialState = useSelector(
    (state: StoreType) => state.circuits,
  );

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    if (!circuits.data || circuits.data.length === 0) {
      dispatch(fetchCircuitsThunk());
    }
  }, [dispatch, circuits.data]);

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <h1 className="text-5xl font-bold text-red-500 text-center mb-10">
        All Circuits
      </h1>

      {circuits.isLoading && !circuits.data && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading Circuits Data...</span>
          </Button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {circuits.data?.map((circuit: CircuitDataType) => (
          <Circuit key={circuit.circuitId} circuit={circuit} />
        ))}
      </div>
    </div>
  );
};

export default Circuits;
