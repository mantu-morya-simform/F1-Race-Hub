import Card from "@/components/Card";
import TopDrivers from "@/components/TopDrivers";
import TopTeams from "@/components/TopTeams";
import UpcomingRace from "@/components/UpcomingRace";
import CircuitsInfo from "@/components/CircuitsInfo";
import type { DriverSliceInitialState } from "@/types/driverTypes";
import type { TeamSliceInitialState } from "@/types/teamsTypes";
import type { RaceSliceInitialState } from "@/types/raceTypes";
import type { CircuitSliceInitialState } from "@/types/circuitTypes";
import type { StandingsSliceInitialState } from "@/types/standingTypes";
import {
  useDrivers,
  useTeams,
  useRaces,
  useCircuits,
  useStandings,
} from "@/hooks";

function Dashboard() {
  const {
    data: driversData = [],
    isLoading: driversLoading,
    isError: driversError,
  } = useDrivers();
  const {
    data: teamsData = [],
    isLoading: teamsLoading,
    isError: teamsError,
  } = useTeams();
  const {
    data: racesData = [],
    isLoading: racesLoading,
    isError: racesError,
  } = useRaces();
  const {
    data: circuitsData = [],
    isLoading: circuitsLoading,
    isError: circuitsError,
  } = useCircuits();
  const {
    data: standingsData = [],
    isLoading: standingsLoading,
    isError: standingsError,
  } = useStandings();

  // Transform data to match the old structure for backward compatibility
  const drivers: DriverSliceInitialState = {
    isLoading: driversLoading,
    isError: driversError ? "Failed to fetch drivers" : "",
    data: driversData as typeof driversData,
  };

  const teams: TeamSliceInitialState = {
    isLoading: teamsLoading,
    isError: teamsError ? "Failed to fetch teams" : "",
    data: teamsData as typeof teamsData,
  };

  const races: RaceSliceInitialState = {
    isLoading: racesLoading,
    isError: racesError ? "Failed to fetch races" : "",
    data: racesData as typeof racesData,
  };

  const circuits: CircuitSliceInitialState = {
    isLoading: circuitsLoading,
    isError: circuitsError ? "Failed to fetch circuits" : "",
    data: circuitsData as typeof circuitsData,
  };

  const standing: StandingsSliceInitialState = {
    isLoading: standingsLoading,
    isError: standingsError ? "Failed to fetch standings" : "",
    year: new Date().getFullYear(),
    data: standingsData as typeof standingsData,
  };

  const totalDrivers = driversData?.length || 0;
  const totalTeams = teamsData?.length || 0;
  const totalRaces = racesData?.length || 0;
  const totalCircuits = circuitsData?.length || 0;

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-red-500 text-center mb-10">
        F1 Dashboard
      </h1>
      {/* All Data State */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card title="Drivers" value={totalDrivers} extraState={drivers} />
        <Card title="Teams" value={totalTeams} extraState={teams} />
        <Card title="Races" value={totalRaces} extraState={races} />
        <Card title="Circuits" value={totalCircuits} extraState={circuits} />
      </div>
      {/* top 5 drivers */}
      <TopDrivers standingData={standing} />
      {/* top 5 teams */}
      <TopTeams teams={teams} />
      {/* Upcoming Race */}
      <UpcomingRace races={races} />
      {/* curtis info */}
      <CircuitsInfo circuits={circuits} />
    </div>
  );
}

export default Dashboard;
