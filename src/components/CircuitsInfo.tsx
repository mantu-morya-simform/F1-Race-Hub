import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type {
  CircuitDataType,
  CircuitSliceInitialState,
} from "@/Redux/features/circuits/circuitTypes";
import Circuit from "./Circuit";

const CircuitsInfo = ({ circuits }: { circuits: CircuitSliceInitialState }) => {
  const topCircuits: CircuitDataType[] = circuits?.data?.slice(0, 5) || [];

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-10">
      <h2 className="text-xl font-bold text-red-400 mb-6 text-center">
        Top Circuits
      </h2>

      {circuits.isLoading && !circuits.data && (
        <div className="mb-4 flex justify-center">
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading Circuits...</span>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topCircuits.map((circuit: CircuitDataType) => (
          <Circuit circuit={circuit} key={circuit.circuitId} />
        ))}
      </div>
    </div>
  );
};

export default CircuitsInfo;
