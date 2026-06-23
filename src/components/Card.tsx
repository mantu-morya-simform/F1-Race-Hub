import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type { DriverSliceInitialState } from "@/types/driverTypes";
import type { TeamSliceInitialState } from "@/types/teamsTypes";
import type { RaceSliceInitialState } from "@/types/raceTypes";
import type { CircuitSliceInitialState } from "@/types/circuitTypes";
import type { StandingsSliceInitialState } from "@/types/standingTypes";

type CardProps = {
  title: string;
  value: number;
  extraState:
    | TeamSliceInitialState
    | DriverSliceInitialState
    | RaceSliceInitialState
    | CircuitSliceInitialState
    | StandingsSliceInitialState;
};

const Card = ({ title, value, extraState }: CardProps) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl text-center shadow-lg transition hover:bg-gray-700 hover:cursor-pointer">
      <h2 className="text-xl text-gray-100">{title}</h2>

      <div className="flex justify-center items-center p-5">
        {extraState.isLoading && !value ? (
          <Button
            disabled
            size="sm"
            className="bg-gray-700 p-5 flex items-center justify-center gap-2"
          >
            <Spinner data-icon="inline-start" />
            <span>Loading...</span>
          </Button>
        ) : (
          <p className="text-3xl font-bold text-red-400">{value}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
